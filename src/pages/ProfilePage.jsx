import React from "react";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../components/organisms/UserProfile/UserProfile";
import ProductList from "../components/organisms/ProductList/ProductList";

// 원래는 계정 정보를 받아와야 하는데, 임시로 더미 정보를 넣어주었습니다.
function ProfilePage() {
  // 상품 더미 정보입니다.
  const productArray = [
    {
      src: "https://img.insight.co.kr/static/2020/03/15/700/c5imbg6083e96xgj9g6f.jpg",
      name: "스위치 동숲에디션 상태굿",
      price: 350000,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg/1024px-Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
      name: "메가드라이브 s급 중고 팝니다",
      price: 120000,
    },
    {
      src: "https://www.nintendo.co.kr/hardware/modal/img/lineup/img-package--oled_white.jpg",
      name: "스위치 올레드 미개봉",
      price: 415000,
    },
    {
      src: "https://blog.kakaocdn.net/dn/lJFMB/btqPaU5VmRz/yikdl5hStOQlkBM7PkfkK0/img.jpg",
      name: "엑박 4세대 패드 블랙 팔아요",
      price: 50000,
    },
    {
      src: "https://image.yes24.com/usedshop/2020/1211/_/540cd528-468a-462f-8084-2314c0c8a6ba_XL.JPG",
      name: "롤코타1 cd 팔아요",
      price: 10000,
    },
    {
      src: "https://mblogthumb-phinf.pstatic.net/MjAxODEwMzFfMjQ4/MDAxNTQwOTcxODcyOTEw.hNRinR5oQ0IF-Clb77oJa8lCbNog6yhf2Hisstqd_0Mg.GwLjuu2I-Fe5P-13duns4KdnpwZi7CT8EoSw7yzuGyYg.JPEG.aprileehj/image_2064034831540971847056.jpg?type=w800",
      name: "플스4 레데리2 팝니다",
      price: 20000,
    },
  ];

  return (
    <>
      <h1 className="a11y-hidden">프로필 페이지</h1>
      <HeaderForm backButton={true} menuButton={true} />
      {/* isMe=true이면 나의 프로필, 아니면 다른 사람의 프로필입니다. */}
      {/* 나중에 현재 로그인된 accountname과 프로필의 accountname을 비교하면 될 거 같아요 */}
      <UserProfile
        isMe={true}
        user={{
          _id: "1",
          username: "애월읍 위니브 게임랜드",
          accountname: "weniv_Gameland",
          intro: "제주 최고의 게임랜드를 찾으시나요?",
          image: "http://www.paullab.co.kr/images/weniv-binky.png",
          isfollow: false,
          following: [],
          follower: [],
          followerCount: 2950,
          followingCount: 128,
        }}
      />
      <ProductList products={productArray} />
    </>
  );
}

export default ProfilePage;
