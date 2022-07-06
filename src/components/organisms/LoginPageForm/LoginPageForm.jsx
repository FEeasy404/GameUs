import React from "react";
import LoginForm from "../../modules/LoginForm/LoginForm";

function LoginPageForm({ title, label }) {
  return (
    <section>
      <div className="max-width">
        <h1>{title}</h1>
        <LoginForm label={label} />
      </div>
    </section>
  );
}

export default LoginPageForm;

