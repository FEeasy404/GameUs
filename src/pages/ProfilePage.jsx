import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../components/organisms/UserProfile/UserProfile";
import ProductList from "../components/organisms/ProductList/ProductList";

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

  // 더미 데이터
  // const productArray = [
  //   {
  //     src: "https://img.insight.co.kr/static/2020/03/15/700/c5imbg6083e96xgj9g6f.jpg",
  //     name: "스위치 동숲에디션 상태굿",
  //     price: 350000,
  //   },
  //   {
  //     src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg/1024px-Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
  //     name: "메가드라이브 s급 중고 팝니다",
  //     price: 120000,
  //   },
  //   {
  //     src: "https://www.nintendo.co.kr/hardware/modal/img/lineup/img-package--oled_white.jpg",
  //     name: "스위치 올레드 미개봉",
  //     price: 415000,
  //   },
  //   {
  //     src: "https://blog.kakaocdn.net/dn/lJFMB/btqPaU5VmRz/yikdl5hStOQlkBM7PkfkK0/img.jpg",
  //     name: "엑박 4세대 패드 블랙 팔아요",
  //     price: 50000,
  //   },
  //   {
  //     src: "https://image.yes24.com/usedshop/2020/1211/_/540cd528-468a-462f-8084-2314c0c8a6ba_XL.JPG",
  //     name: "롤코타1 cd 팔아요",
  //     price: 10000,
  //   },
  //   {
  //     src: "https://mblogthumb-phinf.pstatic.net/MjAxODEwMzFfMjQ4/MDAxNTQwOTcxODcyOTEw.hNRinR5oQ0IF-Clb77oJa8lCbNog6yhf2Hisstqd_0Mg.GwLjuu2I-Fe5P-13duns4KdnpwZi7CT8EoSw7yzuGyYg.JPEG.aprileehj/image_2064034831540971847056.jpg?type=w800",
  //     name: "플스4 레데리2 팝니다",
  //     price: 20000,
  //   },
  // ];

  console.log(products);
  return (
    <>
      <h1 className="a11y-hidden">프로필 페이지</h1>
      <HeaderForm backButton={true} menuButton={true} />
      {/* isMe=true이면 나의 프로필, 아니면 다른 사람의 프로필입니다. */}
      {/* 나중에 현재 로그인된 accountname과 프로필의 accountname을 비교하면 될 거 같아요 */}
      <UserProfile isMe={true} userProfile={profile} />
      <ProductList products={products} />
    </>
  );
}

export default ProfilePage;
