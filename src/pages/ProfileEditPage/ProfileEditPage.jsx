import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ProfileForm from "../../components/modules/ProfileForm/ProfileForm";
import styles from "./profileEditPage.module.css";
import { BASE_URL } from "../../common/BASE_URL";

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

  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  async function handleEdit() {
    usernameInput.current.blur();
    accountnameInput.current.blur();

    // 에러가 없고 계정 ID가 유효하다면 context에 이미지, 사용자 이름, 계정 ID, 소개를 저장합니다.
    if (!error.username && !error.accountname && isAccountnameValid) {
      if (value.image) {
        const resizedImage = await handleImageSize(value.image.data);
        const imageUrl = await uploadImage(resizedImage);
        value.image = imageUrl;
        URL.revokeObjectURL(value.image.src);
      }
      // 이미지를 선택하지 않았다면 기본 이미지로 설정됩니다.
      else {
        value.image = "https://mandarin.api.weniv.co.kr/1658306906297.png";
      }
      const reqBody = { user: { ...value } };
      try {
        const data = await fetch(BASE_URL + "/user", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(reqBody),
        });
        const result = await data.json();
        window.localStorage.removeItem("accountname");
        window.localStorage.setItem("accountname", result.user.accountname);
        navigate(`/profile/${value.accountname}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return (
    <section className={styles["wrapper-profile"]}>
      <h1 className="a11y-hidden">프로필 수정 페이지</h1>
      <HeaderForm
        backButton={true}
        button="저장"
        active={value.username && value.accountname && true}
        onClick={handleEdit}
      />
      <ProfileForm
        setAccountnameValid={setAccountnameValid}
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
        usernameInput={usernameInput}
        accountnameInput={accountnameInput}
      />
    </section>
  );
}

export default ProfileEditPage;
