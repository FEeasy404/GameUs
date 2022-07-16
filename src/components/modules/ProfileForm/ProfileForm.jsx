import React from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";

function ProfileForm() {
  return (
    <div>
      <ImageInputButton
        id="profileImageUpload"
        size="medium"
        a11y="프로필 이미지 파일 불러오기"
      />
      <InputBox id="userName" name="사용자 이름" type="text" placeholder="2~10자 이내여야 합니다." />
      <InputBox id="userId" name="계정 ID" type="text" placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다." />
      <InputBox id="introduce" name="소개" type="text" placeholder="자신과 판매할 상품에 대해 소개해 주세요!" />
    </div>
  );
}

export default ProfileForm;
