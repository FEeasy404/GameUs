import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ProfileForm from "../../components/modules/ProfileForm/ProfileForm";
import { editProfile } from "./ProfileEditPageAPI";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function ProfileEditPage() {
  const [value, setValue] = useState({
    image: "",
    username: "",
    accountname: "",
    intro: "",
  });

  const [error, setError] = useState({
    username: "",
    accountname: "",
  });

  // 계정 ID가 이미 가입되어 있으면 false, 가입 가능하면 true입니다.
  const [isAccountnameValid, setAccountnameValid] = useState(false);

  // 포커스를 잃었는지(blur) 체크하기 위해 사용했습니다.
  const usernameInput = useRef();
  const accountnameInput = useRef();

  const { user, setUser } = useContext(LoginedUserContext);
  const navigate = useNavigate();

  async function handleEdit() {
    usernameInput.current.blur();
    accountnameInput.current.blur();
    // 에러가 없고 계정 ID가 유효하다면 context에 이미지, 사용자 이름, 계정 ID, 소개를 저장합니다.
    if (!error.username && !error.accountname && isAccountnameValid) {
      const data = value;
      if (value.image) {
        const resizedImage = await handleImageSize(data.image.data);
        URL.revokeObjectURL(data.image.src);
        const imageUrl = await uploadImage(resizedImage);
        data.image = imageUrl;
      }
      // 이미지를 선택하지 않았다면 기본 이미지로 설정됩니다.
      else {
        data.image = "https://mandarin.api.weniv.co.kr/1658306906297.png";
      }

      const reqData = { user: { ...data } };
      const newAccountname = await editProfile(user.token, reqData);
      window.sessionStorage.setItem("accountname", newAccountname);
      const updatedUser = { ...user, accountname: newAccountname };
      setUser(updatedUser);
      navigate(`/profile/${value.accountname}`);
    }
  }

  return (
    <section className="wrapper-padding">
      <h2 className="a11y-hidden">프로필 수정 페이지</h2>
      <HeaderForm
        backButton={true}
        button="저장"
        active={
          value.username &&
          value.accountname &&
          !error.username &&
          !error.accountname &&
          true
        }
        onClick={handleEdit}
      />
      <div className="wrapper-contents">
        <ProfileForm
          setAccountnameValid={setAccountnameValid}
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
          usernameInput={usernameInput}
          accountnameInput={accountnameInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleEdit();
            }
          }}
        />
      </div>
    </section>
  );
}

export default ProfileEditPage;
