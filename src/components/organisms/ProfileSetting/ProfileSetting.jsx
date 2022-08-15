import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import ProfileForm from "../../molecules/ProfileForm/ProfileForm";
import { BASE_IMAGE } from "../../../common/BASE_IMAGE";
import { handleImageSize } from "../../../common/ImageResize";
import { uploadImage } from "../../../common/ImageUpload";
import { postRegister } from "../../../pages/RegisterPage/RegisterPageAPI";
import styles from "./profileSetting.module.css";

function ProfileSetting({ value, setValue, error, setError }) {
  // 계정 ID가 이미 가입되어 있으면 false, 가입 가능하면 true입니다.
  const [isAccountnameValid, setAccountnameValid] = useState(false);

  // 포커스를 잃었는지(blur) 체크하기 위해 사용했습니다.
  const usernameInput = useRef();
  const accountnameInput = useRef();

  const navigate = useNavigate();

  // 회원 가입 함수입니다.
  async function handleRegister() {
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
        data.image = BASE_IMAGE;
      }
      const reqData = { user: { ...data } };
      await postRegister(reqData);
      navigate("/");
    }
  }

  return (
    <section className={"wrapper-padding"}>
      <h2 className={styles["title"]}>프로필 설정</h2>
      <p className={styles["message"]}>나중에 언제든지 변경할 수 있습니다.</p>
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
            handleRegister();
          }
        }}
      />
      <Button
        size="large"
        label="게임어스 시작하기"
        active={value.username && value.accountname && true}
        primary={true}
        onClick={handleRegister}
      />
    </section>
  );
}

export default ProfileSetting;
