import React from "react";
import LoginForm from "../../modules/LoginForm/LoginForm";

function LoginPageForm({ title, label }) {
  return (
    <section>
        <h1>{title}</h1>
        <LoginForm label={label} />
    </section>
  );
}

export default LoginPageForm;

