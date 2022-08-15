import React from "react";
import MyProfileButton from "../../molecules/MyProfileButton/MyProfileButton";
import ProfileButton from "../../molecules/ProfileButton/ProfileButton";
import UserProfileBox from "../../molecules/UserProfileBox/UserProfileBox";
import styles from "./userProfile.module.css";

function UserProfile({
  isMyProfile,
  userProfile,
  setProfile,
  setChangeFollow,
}) {
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
        <ProfileButton
          userProfile={userProfile}
          setProfile={setProfile}
          setChangeFollow={setChangeFollow}
        />
      )}
    </section>
  );
}

export default UserProfile;
