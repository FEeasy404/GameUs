import React from "react";
import LoginForm from "../../modules/LoginForm/LoginForm";
import styles from "./emailPasswordForm.module.css";

function EmailPasswordForm({ title, label }) {
  return (
    <section>
      <h1 className={styles["title"]}>{title}</h1>
      <LoginForm label={label} />
    </section>
  );
}

export default EmailPasswordForm;
