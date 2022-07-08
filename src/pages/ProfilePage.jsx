import React from "react";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import UserProfile from "../components/organisms/UserProfile/UserProfile";

// 원래는 계정 정보를 받아와야 하는데, 임시로 더미 정보를 넣어주었습니다.
function ProfilePage() {
  return (
    <div>
      <HeaderForm backButton={true} menuButton={true} />
      {/* isMe=true이면 나의 프로필, 아니면 다른 사람의 프로필입니다. */}
      <UserProfile isMe={false} />
    </div>
  );
}

export default ProfilePage;
