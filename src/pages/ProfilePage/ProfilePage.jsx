import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../../components/organisms/UserProfile/UserProfile";
import ProductList from "../../components/organisms/ProductList/ProductList";
import PostHeader from "../../components/modules/PostHeader/PostHeader";
import PostCard from "../../components/modules/PostCard/PostCard";
import ImagePostCard from "../../components/modules/ImagePostCard/ImagePostCard";
import styles from "./profilePage.module.css";
import { getProfile, getProducts, getPosts } from "./ProfilePageAPI";
import BottomNavigateBar from "../../components/modules/BottomNavigateBar/BottomNavigateBar";

function ProfilePage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isAlbum, setAlbum] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState("");

  const myAccountname = window.localStorage.getItem("accountname");

  useEffect(() => {
    // 사용자의 프로필 정보를 받아오는 함수입니다.
    if (myAccountname === accountname) {
      setIsMyProfile(true);
    } else {
      setIsMyProfile(false);
    }
    getProfile(accountname, setProfile);
    getProducts(accountname, setProducts);
    getPosts(accountname, setPosts);
  }, [accountname, myAccountname]);

  return (
    <>
      <h1 className="a11y-hidden">프로필 페이지</h1>
      <HeaderForm backButton={true} menuButton={true} />
      <UserProfile isMyProfile={isMyProfile} userProfile={profile} />
      <ProductList isMyProfile={isMyProfile} products={products} />
      {posts.length != 0 && (
        <section>
          <PostHeader isAlbum={isAlbum} setAlbum={setAlbum} />
          {!isAlbum ? (
            <ol>
              {posts.map((post, index) => (
                <li key={index}>
                  <PostCard post={post} />
                </li>
              ))}
            </ol>
          ) : (
            <ol className={styles["list-image"]}>
              {posts.map((post, index) => (
                <li key={index}>
                  {post.image && <ImagePostCard post={post} />}
                </li>
              ))}
            </ol>
          )}
        </section>
      )}
      <BottomNavigateBar />
    </>
  );
}

export default ProfilePage;
