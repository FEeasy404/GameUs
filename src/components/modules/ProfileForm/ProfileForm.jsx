import React from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import ProfileImageInput from "../ProfileImageInput/ProfileImageInput";

function ProfileForm({haveProfileImage}) {
  return (
    <div>
      {haveProfileImage && <ProfileImageInput />}
      <InputBox id="userName" name="사용자 이름" type="text" />
      <InputBox id="userId" name="계정 ID" type="text" />
      <InputBox id="introduce" name="소개" type="text" />
    </div>
  );
}

export default ProfileForm;
