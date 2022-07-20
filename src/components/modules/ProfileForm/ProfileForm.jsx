import React, { useEffect } from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import ImageInputForm from "../ImageInputForm/ImageInputForm";
import styles from "./profileForm.module.css";

function ProfileForm({
  setAccountnameValid,
  image,
  setImage,
  username,
  setUsername,
  accountname,
  setAccountname,
  intro,
  setIntro,
  usernameError,
  setUsernameError,
  accountnameError,
  setAccountnameError,
  usernameInput,
  accountnameInput,
}) {
  // 계정 ID 검사 정규식입니다.
  const accountnameRegExp = /^[a-zA-Z0-9_.]+$/i;
  const baseURL = "https://mandarin.api.weniv.co.kr";

  // 사용자 이름과 계정 ID 내용이 바뀌면 에러가 표시되지 않도록 비웁니다.
  useEffect(() => {
    setUsernameError("");
  }, [username]);

  useEffect(() => {
    setAccountnameError("");
    setAccountnameValid(false);
  }, [accountname]);

  // 이미지를 선택하면 우선 로컬 url로 보여주는 함수입니다.
  function handleImageInputData(event) {
    const file = event.target.files[0];
    console.log(file);
    if (!file) {
      return;
    }
    const preview = { src: URL.createObjectURL(file), data: file };
    setImage(preview);
  }

  // 사용자 이름,계정 ID, 소개 셋 다 input이므로 한꺼번에 관리합니다.
  function handleEditInputData(event) {
    // input id가 "username" 이면 사용자 이름 세팅
    if (event.target.id === "username") {
      setUsername(event.target.value);
      // input id가 "accountname" 이면 계정 ID 세팅
    } else if (event.target.id === "accountname") {
      setAccountname(event.target.value);
      // input id가 "intro" 면 소개 세팅
    } else if (event.target.id === "intro") {
      setIntro(event.target.value);
    }
  }

  // username input이 blur되었을 때 유효성 검사를 실행하는 함수입니다.
  function handleBlurUsername() {
    // 사용자 이름 칸이 비어 있는지 검사합니다.
    if (!username) {
      setUsernameError("사용자 이름을 입력해 주세요.");
    }
    // 사용자 이름이 2~10자인지 검사합니다.
    else if (username.length < 2 || username.length > 10) {
      setUsernameError("사용자 이름은 2~10자 이내여야 합니다.");
    }
  }

  // accountname input이 blur되었을 때 유효성 검사를 실행하는 함수입니다.
  async function handleBlurAccountname() {
    // 이미 존재하는 계정 ID인지 검사합니다.
    const reqBody = {
      user: {
        accountname: accountname,
      },
    };
    try {
      const data = await fetch(baseURL + "/user/accountnamevalid", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const result = await data.json();

      if (result.message == "이미 가입된 계정ID 입니다.") {
        setAccountnameError(result.message);
      }
      // 가입된 계정 ID가 아니라면 isAccountValid를 true로 바꿉니다.
      else {
        setAccountnameValid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
    // 계정 ID 칸이 비어 있는지 검사합니다.
    if (!accountname) {
      setAccountnameError("계정 ID를 입력해 주세요.");
    }
    // 계정 ID 형식에 맞는지 검사합니다.
    else if (!accountname.match(accountnameRegExp)) {
      setAccountnameError(
        "계정 ID는 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
      );
    }
  }

  return (
    <div className={styles["wrapper-profile"]}>
      <ImageInputForm
        ally="프로필 이미지 수정"
        boxType="circle"
        boxSize="large"
        image={
          image
            ? image.src
            : "https://mandarin.api.weniv.co.kr/1658306906297.png"
        }
        saveImage={handleImageInputData}
      />
      <InputBox
        id="username"
        name="사용자 이름"
        type="text"
        placeholder="2~10자 이내여야 합니다."
        value={username}
        error={usernameError}
        onBlur={handleBlurUsername}
        onChange={handleEditInputData}
        innerRef={usernameInput}
      />
      <InputBox
        id="accountname"
        name="계정 ID"
        type="text"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        value={accountname}
        error={accountnameError}
        onBlur={handleBlurAccountname}
        onChange={handleEditInputData}
        innerRef={accountnameInput}
      />
      <InputBox
        id="intro"
        name="소개"
        type="text"
        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        value={intro}
        onChange={handleEditInputData}
      />
    </div>
  );
}

export default ProfileForm;
