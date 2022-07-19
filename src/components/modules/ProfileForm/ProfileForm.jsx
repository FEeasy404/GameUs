import React, { useEffect } from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import ImageInputForm from "../ImageInputForm/ImageInputForm";
import styles from "./profileForm.module.css";

function ProfileForm({
  setValid,
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
  const baseURL = "https://mandarin.api.weniv.co.kr";

  const accountnameRegExp = /^[a-zA-Z0-9_.]+$/i;

  useEffect(() => {
    setUsernameError("");
  }, [username]);

  useEffect(() => {
    setAccountnameError("");
    setValid(false);
  }, [accountname]);

  function handleEditInputData(event) {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    } else if (event.target.id === "accountname") {
      setAccountname(event.target.value);
    } else if (event.target.id === "intro") {
      setIntro(event.target.value);
    }
  }

  function handleBlurUsername() {
    if (!username) {
      setUsernameError("사용자 이름을 입력해 주세요.");
    } else if (username.length < 2 || username.length > 10) {
      setUsernameError("사용자 이름은 2~10자 이내여야 합니다.");
    }
  }

  async function handleBlurAccountname() {
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
      } else {
        setValid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
    if (!accountname) {
      setAccountnameError("계정 ID를 입력해 주세요.");
    } else if (!accountname.match(accountnameRegExp)) {
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
