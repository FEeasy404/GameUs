import React from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import Button from "../../atoms/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginForm({ label }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const baseURL = "https://mandarin.api.weniv.co.kr";
  const navigate = useNavigate();

  useEffect(() => {
    setEmailError();
    setPasswordError();
  }, [email, password]);
  // 이메일과 비밀번호 둘 다 input이므로 한꺼번에 관리합니다.
  function handleData(event) {
    // input 타입이 "email" 이면 이메일 세팅
    if (event.target.type === "email") {
      setEmail(event.target.value);
    }
    // input 타입이 "password" 이면 비밀번호 세팅
    else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  }
  async function login() {
    try {
      const reqBody = {
        user: {
          email: email,
          password: password,
        },
      };

      const data = await fetch(baseURL + "/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const result = await data.json();
      console.log(result);
      const emailRegExp =
      /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
      // 이메일 란이 비어있는 경우
      if (!email) {
        setEmailError("이메일을 입력해 주세요.");
      }
      // 비밀번호 란이 비어있는 경우
      else if (!password) {
        setPasswordError("비밀번호를 입력해 주세요.");
      } // 이메일 형식이 일치하지 않는 경우 (button type이 submit이 아니라서 여기에서 유효성을 검사합니다.)
      else if (!email.match(emailRegExp)) {
        setEmailError("이메일 형식에 맞게 입력해 주세요.");
      }
      // 이메일, 비밀번호가 일치하지 않는 경우
      else if (result.status === 422) {
        setPasswordError(result.message);
      }

      // 이메일, 비밀번호가 둘 다 빈 경우는 아예 버튼을 disabled 시켰기 때문에 따로 에러 메시지를 띄우지 않게 했습니다.
      window.localStorage.removeItem("accountname");
      window.localStorage.setItem("accountname", result.user.accountname);
      // 로컬 스토리지에 남아 있는 토큰을 지우고 다시 토큰을 설정합니다.
      // 로그아웃 기능이 따로 없는 거 같아서 우선은 로그인하면서 지워줍니다.
      window.localStorage.removeItem("token");
      window.localStorage.setItem("token", result.user.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form>
      <InputBox
        id="email"
        type="email"
        name="이메일"
        value={email}
        onChange={handleData}
        error={emailError}
      />
      <InputBox
        id="password"
        type="password"
        name="비밀번호"
        value={password}
        onChange={handleData}
        error={passwordError}
      />
      <Button
        href={null}
        size="large"
        label={label}
        active={(email || password) && true}
        primary={true}
        onClick={login}
      />
    </form>
  );
}

export default LoginForm;
