import React from "react";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../components/organisms/UserProfile/UserProfile";

// 원래는 계정 정보를 받아와야 하는데, 임시로 더미 정보를 넣어주었습니다.
function ProfilePage() {
  return (
    <>
      <HeaderForm backButton={true} menuButton={true} />
      {/* isMe=true이면 나의 프로필, 아니면 다른 사람의 프로필입니다. */}
      {/* 나중에 현재 로그인된 accountname과 프로필의 accountname을 비교하면 될 거 같아요 */}
      <UserProfile
        isMe={false}
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
    </>
  );
}

export default ProfilePage;
