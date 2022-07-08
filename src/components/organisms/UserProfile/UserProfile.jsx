import React from "react";
import UserProfileBox from "../../modules/UserProfileBox/UserProfileBox";
import MyProfileButton from "../../modules/MyProfileButton/MyProfileButton";
import ProfileButton from "../../modules/ProfileButton/ProfileButton";

function UserProfile({ isMe }) {
  return (
    <div>
      <UserProfileBox
        userName="애월읍 위니브 게임랜드"
        userId="weniv_Gameland"
        userIntroduce="제주 최고의 게임랜드를 찾으시나요?"
        followerNumber={2950}
        followingNumber={128}
      />
      {isMe ? <MyProfileButton /> : <ProfileButton isFollowing={true} />}
    </div>
  );
}

export default UserProfile;
