import React from "react";
import LoginForm from "../../molecules/LoginForm/LoginForm";
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
      <h2 className={styles["title"]}>{title}</h2>
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
