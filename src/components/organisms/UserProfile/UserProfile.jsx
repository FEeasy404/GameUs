import React from "react";
import UserProfileBox from "../../modules/UserProfileBox/UserProfileBox";
import MyProfileButton from "../../modules/MyProfileButton/MyProfileButton";
import ProfileButton from "../../modules/ProfileButton/ProfileButton";

function UserProfile({ userProfile }) {
  const myAccountname = window.localStorage.getItem("accountname");
  return (
    <div>
      <UserProfileBox
        src={userProfile.image}
        userName={userProfile.username}
        userId={userProfile.accountname}
        userIntroduce={userProfile.intro}
        followerCount={userProfile.followerCount}
        followingCount={userProfile.followingCount}
      />
      {userProfile.accountname == myAccountname ? (
        <MyProfileButton />
      ) : (
        <ProfileButton isFollowing={userProfile.isFollowing} />
      )}
    </div>
  );
}

export default UserProfile;
