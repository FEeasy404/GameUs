import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../../components/organisms/UserProfile/UserProfile";
import ProductList from "../../components/organisms/ProductList/ProductList";
import { getProfile, getProducts, getPosts } from "./ProfilePageAPI";
import BottomNavigateBar from "../../components/modules/BottomNavigateBar/BottomNavigateBar";
import { useContext } from "react";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import PostList from "../../components/organisms/PostList/PostList";

function ProfilePage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();

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
      await getProfile(user.token, accountname, setProfile);
      await getProducts(user.token, accountname, setProducts);
      await getPosts(user.token, accountname, setPosts);
    }
    setUserProfile();
  }, [accountname, user]);

  // useEffect(() => {
  //   async function setUserProfile() {
  //     const userProfile = await getProfile(user.token, accountname);
  //     setProfile(userProfile);
  //   }
  //   setUserProfile();
  // }, [profile]);

  // useEffect(() => {
  //   getProducts(user.token, accountname, setProducts);
  // }, [products]);

  // useEffect(() => {
  //   getPosts(user.token, accountname, setPosts);
  // }, [posts]);

  return (
    <section>
      <h2 className="a11y-hidden">프로필 페이지</h2>
      <HeaderForm backButton={true} menuButton={true} />
      <div className="wrapper-contents">
        {profile && (
          <UserProfile
            isMyProfile={isMyProfile}
            userProfile={profile}
            setProfile={setProfile}
          />
        )}
        {products && (
          <ProductList
            isMyProfile={isMyProfile}
            products={products}
            setProducts={setProducts}
          />
        )}
        {posts && posts.length != 0 && (
          // <section>
          //   <PostHeader isAlbum={isAlbum} setAlbum={setAlbum} />
          //   {!isAlbum ? (
          //     <ol>
          //       {posts.map((post, index) => (
          //         <li key={index}>
          //           <PostCard post={post} />
          //         </li>
          //       ))}
          //     </ol>
          //   ) : (
          //     <ol className={styles["list-image"]}>
          //       {posts.map(
          //         (post, index) =>
          //           post.image && (
          //             <li key={index}>
          //               <ImagePostCard post={post} />
          //             </li>
          //           )
          //       )}
          //     </ol>
          //   )}
          // </section>
          <PostList posts={posts} setPosts={setPosts} />
        )}
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default ProfilePage;
