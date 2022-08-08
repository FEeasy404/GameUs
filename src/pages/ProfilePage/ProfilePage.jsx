import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import UserProfile from "../../components/organisms/UserProfile/UserProfile";
import ProductList from "../../components/organisms/ProductList/ProductList";
import { getProfile, getProducts, getPosts } from "./ProfilePageAPI";
import BottomNavigateBar from "../../components/molecules/BottomNavigateBar/BottomNavigateBar";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import PostList from "../../components/organisms/PostList/PostList";
import Loading from "../../components/molecules/Loading/Loading";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function ProfilePage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [isNotFound, setNotFound] = useState(false);
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState(null);
  const [posts, setPosts] = useState(null);
  const [isMyProfile, setMyProfile] = useState(null);

  const { user } = useContext(LoginedUserContext);

  useEffect(() => {
    // 사용자의 프로필 정보를 받아오는 함수입니다.
    if (user.accountname === accountname) {
      setMyProfile(true);
    } else {
      setMyProfile(false);
    }
    async function setUserProfile() {
      try {
        const result = await getProfile(user.token, accountname);
        if (result.status === "404") {
          throw new Error("User Not Found");
        } else {
          setProfile(result.profile);
          await getProducts(user.token, accountname, setProducts);
          await getPosts(user.token, accountname, setPosts);
        }
      } catch (error) {
        setNotFound(true);
        console.log(error.message);
      }
    }
    setUserProfile();
  }, [accountname, user]);

  return (
    <section>
      <h2 className="a11y-hidden">프로필 페이지</h2>
      <HeaderForm backButton={true} menuButton={true} />
      {isNotFound ? (
        <ErrorPage />
      ) : (
        <div className="wrapper-contents">
          {profile && products && posts ? (
            <>
              <UserProfile
                isMyProfile={isMyProfile}
                userProfile={profile}
                setProfile={setProfile}
              />
              <ProductList
                isMyProfile={isMyProfile}
                products={products}
                setProducts={setProducts}
              />
              {posts.length != 0 && (
                <PostList posts={posts} setPosts={setPosts} />
              )}
            </>
          ) : (
            <Loading />
          )}
        </div>
      )}
      <BottomNavigateBar />
    </section>
  );
}

export default ProfilePage;
