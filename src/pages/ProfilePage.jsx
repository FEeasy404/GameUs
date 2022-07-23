import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../components/organisms/UserProfile/UserProfile";
import ProductList from "../components/organisms/ProductList/ProductList";
import PostCard from "../components/modules/PostCard/PostCard";

function ProfilePage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);

  const BASE_URL = "https://mandarin.api.weniv.co.kr";
  const TOKEN = window.localStorage.getItem("token");

  useEffect(() => {
    // 사용자의 프로필 정보를 받아오는 함수입니다.
    async function getProfile() {
      try {
        const data = await fetch(BASE_URL + `/profile/${accountname}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        });
        const result = await data.json();
        setProfile(result.profile);
      } catch (error) {
        console.log(error.message);
      }
    }

    // 사용자의 상품 리스트를 받아오는 함수입니다.
    async function getProducts() {
      try {
        const data = await fetch(BASE_URL + `/product/${accountname}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        });
        const result = await data.json();
        setProducts(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    async function getPosts() {
      try {
        const data = await fetch(BASE_URL + `/post/${accountname}/userpost`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        });
        const result = await data.json();
        console.log(result.post);
        setPosts(result.post);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProfile();
    getProducts();
    getPosts();
  }, [accountname]);

  return (
    <>
      <h1 className="a11y-hidden">프로필 페이지</h1>
      <HeaderForm backButton={true} menuButton={true} />
      <UserProfile userProfile={profile} />
      <ProductList products={products} />

      <section>
        <h1 className="a11y-hidden">나의 게시글 목록</h1>
        {posts.length != 0 && (
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default ProfilePage;
