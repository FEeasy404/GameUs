import React from "react";
import EmailPasswordForm from "../components/organisms/EmailPasswordForm/EmailPasswordForm";
import ProfileSetting from "../components/organisms/ProfileSetting/ProfileSetting";
import { useEffect, useState } from "react";
import { RegisterContext } from "../contexts/RegisterContext";

function RegisterPage() {
  const [isEmailValid, setEmailValid] = useState(false);
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

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);

  return (
    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
      {!isEmailValid ? (
        <EmailPasswordForm
          title="이메일로 회원 가입"
          label="다음"
          setEmailValid={setEmailValid}
        />
      ) : (
        <ProfileSetting />
      )}
    </RegisterContext.Provider>
  );
}

export default RegisterPage;
