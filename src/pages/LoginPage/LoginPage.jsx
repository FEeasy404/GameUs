import React from "react";
import { Link } from "react-router-dom";
import EmailPasswordForm from "../../components/organisms/EmailPasswordForm/EmailPasswordForm";
import styles from "./loginPage.module.css";

function LoginPage() {
  return (
    <>
      <EmailPasswordForm title="로그인" label="로그인" />
      <Link to="/user" className={styles["link-email"]}>
        이메일로 회원가입
      </Link>
    </>
  );
}

export default LoginPage;
