import React from "react";
import LoginForm from "../../modules/LoginForm/LoginForm";
import styles from "./emailPasswordForm.module.css";

function EmailPasswordForm({ title, label, setEmailPasswordValid }) {
  return (
    <section className="wrapper-padding">
      <h1 className={styles["title"]}>{title}</h1>
      <LoginForm label={label} setEmailPasswordValid={setEmailPasswordValid} />
    </section>
  );
}

export default EmailPasswordForm;
