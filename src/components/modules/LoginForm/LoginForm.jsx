import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../../atoms/InputBox/InputBox";
import Button from "../../atoms/Button/Button";
import styles from "./loginForm.module.css";
import { BASE_URL } from "../../../common/BASE_URL";
import { postLogin } from "../../../pages/LoginPage/LoginPageAPI";

function LoginForm({
  label,
  value,
  setValue,
  error,
  setError,
  setEmailPasswordValid,
}) {
  // 이메일이 이미 가입되어 있으면 false, 가입 가능하면 true입니다.
  const [isEmailValid, setEmailValid] = useState(false);

  // 포커스를 잃었는지(blur) 체크하기 위해 사용했습니다.
  const emailInput = useRef();
  const passwordInput = useRef();
  // 이메일 검사 정규식입니다.
  const emailRegExp = /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

  const navigate = useNavigate();

  // email과 password 내용이 바뀌면 에러가 표시되지 않도록 비웁니다.
  useEffect(() => {
    setError({ ...error, email: "" });
    setEmailValid(false);
  }, [value.email]);

  useEffect(() => {
    setError({ ...error, password: "" });
  }, [value.password]);

  // 이메일과 비밀번호 둘 다 input이므로 한꺼번에 관리합니다.
  function handleInputValue(event) {
    setValue({ ...value, [event.target.id]: event.target.value });
  }

  // 에러를 체크합니다.
  function checkEmailError() {
    // 이메일 란이 비어있는 경우
    if (!value.email) {
      setError({ ...error, email: "이메일을 입력해 주세요." });
      return false;
    }
    // 이메일 형식이 일치하지 않는 경우 (button type이 submit이 아니라서 여기에서 유효성을 검사합니다.)
    else if (!value.email.match(emailRegExp)) {
      setError({ ...error, email: "잘못된 이메일 형식입니다." });
      return false;
    }
    // emailInput.current.focus();
    return true;
  }

  function checkPasswordError() {
    // 비밀번호 란이 비어있는 경우
    if (!value.password) {
      setError({ ...error, password: "비밀번호를 입력해 주세요." });
      return false;
    }
    // 비밀번호가 6자 이상인지 검사합니다.
    else if (value.password.length < 6) {
      setError({ ...error, password: "비밀번호는 6자 이상 입력해 주세요." });
      return false;
    }
    // passwordInput.current.focus();
    return true;
  }

  // 로그인 함수입니다.
  async function handleSubmitLogin() {
    // 로그인은 버튼 눌렀을 때 유효성 검사를 하므로 여기에서 함수를 실행시킵니다.
    if (error && checkEmailError() && checkPasswordError()) {
      const reqData = {
        user: {
          ...value,
        },
      };
      const result = await postLogin(reqData, error, setError);
      if (result.status === 422) {
        setError({
          ...error,
          password: "이메일 또는 비밀번호가 일치하지 않습니다.",
        });
      } else {
        // 로컬 스토리지에 accountname 저장
        window.localStorage.setItem("accountname", result.user.accountname);
        // 로컬 스토리지에 토큰 저장
        window.localStorage.setItem("token", result.user.token);
        navigate("/");
      }
      // if (!error.email && !error.password) {
      // }
    }
  }

  // 회원 가입에서는 blur일 때 유효성 검사를 진행합니다.
  async function checkEmailValid() {
    // 이미 존재하는 이메일인지 검사합니다.
    const reqData = {
      user: {
        email: value.email,
      },
    };
    try {
      const data = await fetch(BASE_URL + "/user/emailvalid", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqData),
      });
      const result = await data.json();

      if (result.message == "이미 가입된 이메일 주소 입니다.") {
        setError({ ...error, email: result.message });
      }
      // 가입된 이메일이 아니라면 isEmailValid를 true로 바꿉니다.
      else {
        setEmailValid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleCheckEmail() {
    // 버튼을 클릭했을 때 포커스를 해제시켜서 한 번 더 유효성 검사를 실행시킵니다.
    emailInput.current.blur();
    passwordInput.current.blur();
    // 에러가 없고 이메일이 유효하다면 context에 이메일, 비밀번호를 저장합니다.
    if (!error.email && !error.password && isEmailValid) {
      setEmailPasswordValid(true); // 이메일과 비밀번호에 문제가 없으면 true로 변경
    }
  }

  return (
    <form className={styles["form-login"]}>
      <InputBox
        id="email"
        type="email"
        name="이메일"
        value={value.email}
        onBlur={
          label !== "로그인"
            ? () => {
                checkEmailError();
                checkEmailValid();
              }
            : null
        }
        onChange={handleInputValue}
        error={error.email}
        innerRef={emailInput}
      />
      <InputBox
        id="password"
        type="password"
        name="비밀번호"
        value={value.password}
        onBlur={label !== "로그인" ? checkPasswordError : null}
        onChange={handleInputValue}
        error={error.password}
        innerRef={passwordInput}
      />
      <Button
        href={null}
        size="large"
        label={label}
        active={value.email && value.password && true}
        primary={true}
        onClick={label === "로그인" ? handleSubmitLogin : handleCheckEmail}
      />
    </form>
  );
}

export default LoginForm;
