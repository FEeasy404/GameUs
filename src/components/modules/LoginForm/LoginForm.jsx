import React from "react";
import InputBox from "../../atoms/InputBox/InputBox";
import Button from "../../atoms/Button/Button";

function LoginForm({ label }) {
  return (
    <div>
      <InputBox id="email" type="email" name="이메일" />
      <InputBox id="password" type="password" name="비밀번호" />
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
