import React, { useContext, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ProfileForm from "../../modules/ProfileForm/ProfileForm";
import Button from "../../atoms/Button/Button";
import { RegisterContext } from "../../../contexts/RegisterContext";

function ProfileSetting() {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [accountnameError, setAccountnameError] = useState("");

  const [isValid, setValid] = useState(false);
  // const baseURL = "https://mandarin.api.weniv.co.kr";

  const usernameInput = useRef();
  const accountnameInput = useRef();
  // const navigate = useNavigate();

  const { registerData, setRegisterData } = useContext(RegisterContext);

  // const myAccountname = window.localStorage.getItem("accountname");

  // async function handleRegister() {
  function handleRegister() {
    usernameInput.current.blur();
    accountnameInput.current.blur();
    
    if (!usernameError && !accountnameError && isValid) {
      const data = registerData;
      data.user.username = username;
      data.user.accountname = accountname;
      data.user.intro = intro;
      setRegisterData(data);
      console.log(registerData);
    }
    // if (isValid) {
    //   setRegisterData(registerData);
    //   try {
    //     const data = await fetch(baseURL + "/user", {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify(registerData),
    //     });
    //     const result = await data.json();
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // }
  }

  return (
    <section className="wrapper-padding">
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <ProfileForm
        setValid={setValid}
        image={image}
        setImage={setImage}
        username={username}
        setUsername={setUsername}
        accountname={accountname}
        setAccountname={setAccountname}
        intro={intro}
        setIntro={setIntro}
        usernameError={usernameError}
        setUsernameError={setUsernameError}
        accountnameError={accountnameError}
        setAccountnameError={setAccountnameError}
        usernameInput={usernameInput}
        accountnameInput={accountnameInput}
      />
      <Button
        size="large"
        label="게임어스 시작하기"
        active={username && accountname && true}
        primary={true}
        onClick={handleRegister}
      />
    </section>
  );
}

export default ProfileSetting;
