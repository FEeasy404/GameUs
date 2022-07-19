import React from "react";
import EmailPasswordForm from "../components/organisms/EmailPasswordForm/EmailPasswordForm";
import ProfileSetting from "../components/organisms/ProfileSetting/ProfileSetting";
import { useState } from "react";
import { RegisterContext } from "../contexts/RegisterContext";

function RegisterPage() {
  const [isEmailPasswordValid, setEmailPasswordValid] = useState(false);
  const [registerData, setRegisterData] = useState({
    user: {
      username: ".",
      email: "",
      password: "",
      accountname: "GameUs",
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
