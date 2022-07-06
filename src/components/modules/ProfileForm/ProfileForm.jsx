import React from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import ImageInput from "../../atoms/ImageInput/ImageInput";

function ProfileForm() {
  return (
    <div>
      <ImageInput size="medium" a11y="프로필 이미지 파일 불러오기"/>
      <LoginInput id="userName" name="사용자 이름" type="text" />
      <LoginInput id="userId" name="계정 ID" type="text" />
      <LoginInput id="introduce" name="소개" type="text" />
    </div>
  );
}

export default ProfileForm;
