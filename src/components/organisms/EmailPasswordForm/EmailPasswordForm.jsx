import React from "react";
import LoginForm from "../../modules/LoginForm/LoginForm";
import styles from "./emailPasswordForm.module.css";

function EmailPasswordForm({
  title,
  label,
  value,
  setValue,
  error,
  setError,
  setEmailPasswordValid,
}) {
  return (
    <section className="wrapper-padding">
      <h1 className={styles["title"]}>{title}</h1>
      <LoginForm
        label={label}
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
        setEmailPasswordValid={setEmailPasswordValid}
      />
    </section>
  );
}

export default EmailPasswordForm;
