import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderInput from "../../atoms/HeaderInput/HeaderInput";
import IconButton from "../../atoms/IconButton/IconButton";
import Button from "../../atoms/Button/Button";
import styles from "./headerForm.module.css";
import Modal from "../../../components/organisms/Modal/Modal";

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
  handleSetting,
}) {
  let navigate = useNavigate();
  const classButton = button ? "button" : "";
  const [onModal, setOnModal] = useState(false);
  //로그아웃 함수
  function handleLogout() {
    console.log("로그아웃");
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
        {title && <h1 className={styles[titleSize]}>{title}</h1>}
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
        {input && <HeaderInput placeholder="계정 검색" />}
      </header>
      {onModal && (
        <Modal
          onModal={onModal}
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
