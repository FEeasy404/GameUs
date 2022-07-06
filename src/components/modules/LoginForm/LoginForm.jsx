import React from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import Button from "../../atoms/Button/Button";

function LoginForm({label}) {
  return (
    <div>
      <LoginInput id="email" type="email" name="이메일" />
      <LoginInput id="password" type="password" name="비밀번호" />
      <Button
        href={null}
        size="large"
        label={label}
        active={false}
        primary={true}
        onClick={null}
      />
    </div>
  );
}

export default LoginForm;
