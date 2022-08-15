import React, { useContext, useEffect } from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import ImageInputForm from "../../molecules/ImageInputForm/ImageInputForm";
import { BASE_URL } from "../../../common/BASE_URL";
import { BASE_IMAGE } from "../../../common/BASE_IMAGE";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import styles from "./profileForm.module.css";

function ProfileForm({
  value,
  setValue,
  error,
  setError,
  usernameInput,
  accountnameInput,
  setAccountnameValid,
  onKeyDown,
}) {
  // 계정 ID 검사 정규식입니다.
  const accountnameRegExp = /^[a-zA-Z0-9_.]+$/i;
  const { user } = useContext(LoginedUserContext);

  // 사용자 이름과 계정 ID 내용이 바뀌면 에러가 표시되지 않도록 비웁니다.
  useEffect(() => {
    setError({ ...error, username: "" });
  }, [value.username]);

  useEffect(() => {
    setError({ ...error, accountname: "" });
  }, [value.accountname]);

  // 이미지를 선택하면 우선 로컬 url로 보여주는 함수입니다.
  function handleImageValue(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const preview = { src: URL.createObjectURL(file), data: file };
    setValue({ ...value, image: preview });
  }

  // 사용자 이름,계정 ID, 소개 셋 다 input이므로 한꺼번에 관리합니다.
  function handleInputValue(event) {
    setValue({ ...value, [event.target.id]: event.target.value });
  }

  function checkUsernameError() {
    // 사용자 이름 칸이 비어 있는지 검사합니다.
    if (!value.username) {
      setError({ ...error, username: "사용자 이름을 입력해 주세요." });
      return false;
    }
    // 사용자 이름이 2~10자인지 검사합니다.
    else if (value.username.length < 2 || value.username.length > 10) {
      setError({ ...error, username: "사용자 이름은 2~10자 이내여야 합니다." });
      return false;
    }
    return true;
  }

  function checkAccountnameError() {
    // 계정 ID 칸이 비어 있는지 검사합니다.
    if (!value.accountname) {
      setError({ ...error, accountname: "계정 ID를 입력해 주세요." });
      return false;
    }
    // 계정 ID 형식에 맞는지 검사합니다.
    else if (!value.accountname.match(accountnameRegExp)) {
      setError({
        ...error,
        accountname: "계정 ID는 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
      });
      return false;
    }
    checkAccountnameValid();

    return true;
  }

  // accountname input이 blur되었을 때 유효성 검사를 실행하는 함수입니다.
  async function checkAccountnameValid() {
    if (value.accountname === user.accountname) {
      setAccountnameValid(true);
    } else {
      // 이미 존재하는 계정 ID인지 검사합니다.
      const reqBody = {
        user: {
          accountname: value.accountname,
        },
      };
      try {
        const data = await fetch(BASE_URL + "/user/accountnamevalid", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(reqBody),
        });
        const result = await data.json();

        if (result.message == "이미 가입된 계정ID 입니다.") {
          setError({ ...error, accountname: result.message });
          return false;
        }
        // 가입된 계정 ID가 아니라면 isAccountValid를 true로 바꿉니다.
        else {
          setAccountnameValid(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <div className={styles["wrapper-profile"]}>
      <ImageInputForm
        ally="프로필 이미지 수정"
        boxType="circle"
        boxSize="large"
        image={
          value.image
            ? value.image.src
              ? value.image.src
              : value.image
            : BASE_IMAGE
        }
        saveImage={handleImageValue}
      />
      <InputBox
        id="username"
        name="사용자 이름"
        type="text"
        placeholder="2~10자 이내여야 합니다."
        value={value.username}
        error={error.username}
        onBlur={checkUsernameError}
        onChange={handleInputValue}
        innerRef={usernameInput}
      />
      <InputBox
        id="accountname"
        name="계정 ID"
        type="text"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        value={value.accountname}
        error={error.accountname}
        onBlur={checkAccountnameError}
        onChange={handleInputValue}
        innerRef={accountnameInput}
      />
      <InputBox
        id="intro"
        name="소개"
        type="text"
        placeholder="자신과 판매할 상품에 대해 20자 이내로 소개해 주세요!"
        value={value.intro}
        onChange={handleInputValue}
        onKeyDown={onKeyDown}
        maxLength={20}
      />
    </div>
  );
}

export default ProfileForm;
