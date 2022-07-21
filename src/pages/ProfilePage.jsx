import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../components/organisms/UserProfile/UserProfile";
import ProductList from "../components/organisms/ProductList/ProductList";
import BottomNavigateBar from "./components/modules/BottomNavigateBar/BottomNavigateBar";

function ProfilePage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  // baseurl과 토큰 받아오는 코드는 나중에 상위로 옮겨서 전역으로 관리하면 좋을 거 같아요
  const baseURL = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    // 호준님 말씀대로 api는 메소드별로 따로 함수화해서 관리해도 좋을 것 같습니다

    // 사용자의 프로필 정보를 받아오는 함수입니다.
    async function getProfile() {
      try {
        const data = await fetch(baseURL + `/profile/${accountname}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
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
        const data = await fetch(baseURL + `/product/${accountname}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        });
        const result = await data.json();
        console.log(result);
        setProducts(result);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProfile();
    getProducts();
  }, [accountname]);

  return (
    <section>
      <h1 className="a11y-hidden">프로필 페이지</h1>
      <HeaderForm backButton={true} menuButton={true} />
      <UserProfile userProfile={profile} />
      <ProductList products={products} />
      <BottomNavigateBar />
    </section>
  );
}

export default ProfilePage;
