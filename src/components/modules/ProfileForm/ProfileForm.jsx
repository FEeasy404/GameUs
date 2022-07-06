import React from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import ProfileImageInput from "../../atoms/ProfileImageInput/ProfileImageInput";

function ProfileForm() {
  return (
    <div>
      <ProfileImageInput />
      <LoginInput id="userName" name="사용자 이름" type="text" />
      <LoginInput id="userId" name="계정 ID" type="text" />
      <LoginInput id="introduce" name="소개" type="text" />
    </div>
  );
}

export default ProfileForm;
