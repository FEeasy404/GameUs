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

  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState(null);
  const [posts, setPosts] = useState(null);
  const [isAlbum, setAlbum] = useState(false);
  const [isMyProfile, setIsMyProfile] = useState("");
  const [isDeletePost, setDeletePost] = useState("");

  const myAccountname = window.sessionStorage.getItem("accountname");

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

  useEffect(() => {
    getPosts(accountname, setPosts);
  }, [isDeletePost]);

  return (
    <section>
      <h1 className="a11y-hidden">프로필 페이지</h1>
      <HeaderForm backButton={true} menuButton={true} />
      <div className="wrapper-contents">
        {profile && (
          <UserProfile isMyProfile={isMyProfile} userProfile={profile} />
        )}
        {products && (
          <ProductList isMyProfile={isMyProfile} products={products} />
        )}
        {posts && posts.length != 0 && (
          <section>
            <PostHeader isAlbum={isAlbum} setAlbum={setAlbum} />
            {!isAlbum ? (
              <ol>
                {posts.map((post, index) => (
                  <li key={index}>
                    <PostCard post={post} setDeletePost={setDeletePost} />
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
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default ProfilePage;
