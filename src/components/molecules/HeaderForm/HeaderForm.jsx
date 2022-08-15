import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import HeaderInput from "../../atoms/HeaderInput/HeaderInput";
import IconButton from "../../atoms/IconButton/IconButton";
import Modal from "../../organisms/Modal/Modal";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import styles from "./headerForm.module.css";

function HeaderForm({
  backButton,
  searchButton,
  menuButton,
  title,
  titleSize,
  button,
  active,
  input,
  onClick,
  onInput,
  handleSetting,
}) {
  let navigate = useNavigate();
  const classButton = button ? "button" : "";
  const [onModal, setOnModal] = useState(false);
  const { setUser } = useContext(LoginedUserContext);

  //로그아웃 함수
  function handleLogout() {
    window.sessionStorage.clear();
    setUser({
      token: null,
      accountname: null,
      image: null,
    });

    navigate("/");
  }
  return (
    <>
      <header className={`${styles["wrapper-header"]} ${styles[classButton]}`}>
        {backButton && (
          <IconButton
            type="back"
            text="뒤로 가기"
            onClick={() => navigate(-1)}
          />
        )}
        {title && <h2 className={styles[titleSize]}>{title}</h2>}
        {searchButton && (
          <IconButton
            type="search"
            text="검색"
            onClick={() => navigate("/search")}
          />
        )}
        {menuButton && (
          <IconButton
            type="menu"
            text="더보기"
            onClick={() => {
              setOnModal(!onModal);
            }}
          />
        )}
        {button && (
          <Button
            size="medium_small"
            label={button}
            active={active}
            primary={true}
            onClick={onClick}
          />
        )}
        {input && <HeaderInput placeholder="계정 검색" onInput={onInput} />}
      </header>
      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          buttons={[
            { text: "설정 및 개인정보", onClick: handleSetting },
            { text: "로그아웃", onClick: handleLogout },
          ]}
          name="로그인"
        />
      )}
    </>
  );
}

export default HeaderForm;
