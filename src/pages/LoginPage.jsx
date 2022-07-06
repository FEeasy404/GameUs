import React from "react";
import { Link } from "react-router-dom";
import LoginPageForm from "../components/organisms/LoginPageForm/LoginPageForm";

function LoginPage() {
  return (
    <>
      <LoginPageForm title="로그인" label="로그인" />
      <Link to="/user">이메일로 회원가입</Link>
    </>
  );
}

export default LoginPage;
