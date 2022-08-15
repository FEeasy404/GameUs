import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailPasswordForm from "../../components/organisms/EmailPasswordForm/EmailPasswordForm";
import styles from "./loginPage.module.css";

function LoginPage() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="wrapper-contents">
      <EmailPasswordForm
        title="로그인"
        label="로그인"
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
      />
      <Link to="/register" className={styles["link-email"]}>
        이메일로 회원가입
      </Link>
    </div>
  );
}

export default LoginPage;
