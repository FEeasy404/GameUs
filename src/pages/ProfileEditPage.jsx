import React from "react";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import ProfileForm from "../components/modules/ProfileForm/ProfileForm";

function ProfileEditPage() {
  return (
    <>
      <h1 className="a11y-hidden">프로필 수정 페이지</h1>
      <HeaderForm backButton={true} button="저장" />
      <ProfileForm />
    </>
  );
}

export default ProfileEditPage;
