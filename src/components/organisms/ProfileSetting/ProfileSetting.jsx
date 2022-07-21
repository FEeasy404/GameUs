import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import ProfileForm from "../../modules/ProfileForm/ProfileForm";
import Button from "../../atoms/Button/Button";
import { RegisterContext } from "../../../contexts/RegisterContext";
import styles from "./profileSetting.module.css";

function ProfileSetting() {
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

  // useContext를 이용하여 회원 가입 정보를 가져옵니다.
  const { registerData, setRegisterData } = useContext(RegisterContext);

  const baseURL = "https://mandarin.api.weniv.co.kr";
  const navigate = useNavigate();

  // 이미지 리사이즈 함수입니다.
  async function handleImageResize(file) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
    };
    try {
      const blobFile = await imageCompression(file, options);
      const newFile = new File([blobFile], `${blobFile.name}`, {
        type: blobFile.type,
      });
      return newFile;
    } catch (error) {
      console.log(error);
    }
  }

  // 이미지를 서버에 업로드하는 함수입니다.
  async function uploadImage(file) {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const imageReqPath = "/image/uploadfile";
      const res = await fetch(baseURL + imageReqPath, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      const filename = await json.filename;
      return baseURL + "/" + filename;
    } catch (error) {
      console.log(error.message);
    }
  }

  // 회원 가입 함수입니다.
  async function handleRegister() {
    usernameInput.current.blur();
    accountnameInput.current.blur();

    // 에러가 없고 계정 ID가 유효하다면 context에 이미지, 사용자 이름, 계정 ID, 소개를 저장합니다.
    if (!error.username && !error.accountname && isAccountnameValid) {
      const data = registerData;
      if (value.image) {
        const resizedImage = await handleImageResize(value.image.data);
        const imageUrl = await uploadImage(resizedImage);
        data.user.image = imageUrl;
        URL.revokeObjectURL(value.image.src);
      }
      // 이미지를 선택하지 않았다면 기본 이미지로 설정됩니다.
      else {
        data.user.image = "https://mandarin.api.weniv.co.kr/1658306906297.png";
      }
      data.user = {
        ...data.user,
        username: value.username,
        accountname: value.accountname,
        intro: value.intro,
      };
      setRegisterData(data);

      // context에 저장된 데이터로 회원가입을 진행합니다.
      try {
        await fetch(baseURL + "/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(registerData),
        });
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <section className={"wrapper-padding"}>
      <h1 className={styles["title"]}>프로필 설정</h1>
      <p className={styles["message"]}>나중에 언제든지 변경할 수 있습니다.</p>
      <ProfileForm
        setAccountnameValid={setAccountnameValid}
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
        usernameInput={usernameInput}
        accountnameInput={accountnameInput}
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
