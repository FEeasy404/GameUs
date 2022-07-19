import React from "react";
import LoginForm from "../../modules/LoginForm/LoginForm";
import styles from "./emailPasswordForm.module.css";

function EmailPasswordForm({ title, label, setEmailValid }) {
  return (
    <section className="wrapper-padding">
      <h1 className={styles["title"]}>{title}</h1>
      <LoginForm label={label} setEmailValid={setEmailValid}/>
    </section>
  );
}

export default EmailPasswordForm;
