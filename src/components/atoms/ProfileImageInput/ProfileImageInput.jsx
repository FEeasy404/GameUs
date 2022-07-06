import React from "react";

function ProfileImageInput() {
  return (
    <div>
      <label htmlFor="profileImageInput">프로필 이미지 파일 선택</label>
      <input type="file" accept=".jpeg, .jpg, .png" id="profileImageInput" />
    </div>
  );
}

export default ProfileImageInput;
