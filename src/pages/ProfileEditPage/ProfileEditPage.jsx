import React, { useRef, useState } from "react";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ProfileForm from "../../components/modules/ProfileForm/ProfileForm";
import styles from "./profileEditPage.module.css";
import { handleEdit } from "./ProfileEditPageAPI";

function ProfileEditPage() {
  const [value, setValue] = useState({
    image: "",
    username: "",
    accountname: "",
    intro: "",
  });

  const [error, setError] = useState({
    username: "",
    accountname: "",
  });
  // 계정 ID가 이미 가입되어 있으면 false, 가입 가능하면 true입니다.
  const [isAccountnameValid, setAccountnameValid] = useState(false);

  // 포커스를 잃었는지(blur) 체크하기 위해 사용했습니다.
  const usernameInput = useRef();
  const accountnameInput = useRef();

  return (
    <section className={styles["wrapper-profile"]}>
      <h1 className="a11y-hidden">프로필 수정 페이지</h1>
      <HeaderForm
        backButton={true}
        button="저장"
        active={value.username && value.accountname && true}
        onClick={() => {
          usernameInput.current.blur();
          accountnameInput.current.blur();
          handleEdit(error, value, isAccountnameValid);
        }}
      />
      <ProfileForm
        setAccountnameValid={setAccountnameValid}
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
        usernameInput={usernameInput}
        accountnameInput={accountnameInput}
      />
    </section>
  );
}

export default ProfileEditPage;
