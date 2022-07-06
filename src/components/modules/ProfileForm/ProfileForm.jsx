import React from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import ProfileImageInput from "../../atoms/ProfileImageInput/ProfileImageInput";
import Button from "../../atoms/Button/Button";

function ProfileForm() {
  return (
    <div>
      <ProfileImageInput />
      <LoginInput id="userName" name="사용자 이름" type="text" />
      <LoginInput id="userId" name="계정 ID" type="text" />
      <LoginInput id="introduce" name="소개" type="text" />
      <Button
        size="large"
        label="게임어스 시작하기"
        active={false}
        primary={true}
      />
    </div>
  );
}

export default ProfileForm;
