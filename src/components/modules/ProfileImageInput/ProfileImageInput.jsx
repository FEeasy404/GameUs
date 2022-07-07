import React from 'react'
import ImageBox from '../../atoms/ImageBox/ImageBox'
import ImageInput from "../../atoms/ImageInput/ImageInput";

function ProfileImageInput() {
  const USER_PROFILE_IMG_URL = "https://www.nicepng.com/png/detail/129-1299268_pacman-ghost.png";
  return (
    <div>
      <ImageInput
        id="profileImageUpload"
        size="medium"
        a11y="프로필 이미지 파일 불러오기"
      />
      <ImageBox src={USER_PROFILE_IMG_URL} type="circle" size="large" alt="사용자 프로필 사진"/>
    </div>
  )
}

export default ProfileImageInput
