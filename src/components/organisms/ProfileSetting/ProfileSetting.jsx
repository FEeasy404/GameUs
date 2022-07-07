import React from "react";
import ProfileForm from "../../modules/ProfileForm/ProfileForm";
import Button from "../../atoms/Button/Button";

function ProfileSetting() {
  return (
    <div>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <ProfileForm haveProfileImage={true}/>
      <Button
        size="large"
        label="게임어스 시작하기"
        active={false}
        primary={true}
      />
    </div>
  );
}

export default ProfileSetting;
