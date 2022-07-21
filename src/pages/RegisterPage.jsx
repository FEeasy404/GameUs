import React from "react";
import EmailPasswordForm from "../components/organisms/EmailPasswordForm/EmailPasswordForm";
import ProfileSetting from "../components/organisms/ProfileSetting/ProfileSetting";
import { useState } from "react";
import { RegisterContext } from "../contexts/RegisterContext";

function RegisterPage() {
  // 이메일과 비밀번호가 유효성 검사를 모두 통과하면 true입니다.
  // 이 변수를 이용해서 '이메일로 회원가입' 부분과 '프로필 설정' 부분 중 어느 쪽을 보여줄지 판별합니다.
  const [isEmailPasswordValid, setEmailPasswordValid] = useState(false);
  // 회원가입 api에 보낼 request body입니다. 이걸 context에 담습니다.
  const [registerData, setRegisterData] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      accountname: "",
      intro: "",
      image: "",
    },
  });

  return (
    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
      {!isEmailPasswordValid ? (
        <EmailPasswordForm
          title="이메일로 회원 가입"
          label="다음"
          setEmailPasswordValid={setEmailPasswordValid}
        />
      ) : (
        <ProfileSetting />
      )}
    </RegisterContext.Provider>
  );
}

export default RegisterPage;
