import React from "react";
import UserProfileBox from "../../modules/UserProfileBox/UserProfileBox";
import MyProfileButton from "../../modules/MyProfileButton/MyProfileButton";
import ProfileButton from "../../modules/ProfileButton/ProfileButton";

function UserProfile({ isMe, user }) {
  return (
    <div>
      <UserProfileBox
        src={user.image}
        userName={user.username}
        userId={user.accountname}
        userIntroduce={user.intro}
        followerCount={user.followerCount}
        followingCount={user.followingCount}
      />
      {isMe ? <MyProfileButton /> : <ProfileButton isFollowing={user.isFollowing} />}
    </div>
  );
}

export default UserProfile;
