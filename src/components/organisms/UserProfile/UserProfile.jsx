import React from "react";
import UserProfileBox from "../../modules/UserProfileBox/UserProfileBox";
import MyProfileButton from "../../modules/MyProfileButton/MyProfileButton";
import ProfileButton from "../../modules/ProfileButton/ProfileButton";
import styles from "./userProfile.module.css";

function UserProfile({ isMyProfile, userProfile }) {
  return (
    <section className={styles["wrapper-profile"]}>
      <UserProfileBox
        image={userProfile.image}
        username={userProfile.username}
        accountname={userProfile.accountname}
        intro={userProfile.intro}
        followerCount={userProfile.followerCount}
        followingCount={userProfile.followingCount}
      />
      {isMyProfile ? (
        <MyProfileButton />
      ) : (
        <ProfileButton isFollowing={userProfile.isFollowing} />
      )}
    </section>
  );
}

export default UserProfile;
