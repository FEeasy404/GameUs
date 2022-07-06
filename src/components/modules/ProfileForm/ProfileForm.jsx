import React from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import ImageInput from "../../atoms/ImageInput/ImageInput";

function ProfileForm() {
  return (
    <div>
      <ImageInput
        id="profileImageUpload"
        size="medium"
        a11y="프로필 이미지 파일 불러오기"
      />
      <InputBox id="userName" name="사용자 이름" type="text" />
      <InputBox id="userId" name="계정 ID" type="text" />
      <InputBox id="introduce" name="소개" type="text" />
    </div>
  );
}

export default ProfileForm;
