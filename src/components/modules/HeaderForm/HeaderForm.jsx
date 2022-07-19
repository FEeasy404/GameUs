import HeaderInput from "../../atoms/HeaderInput/HeaderInput";
import IconButton from "../../atoms/IconButton/IconButton";
import Button from "../../atoms/Button/Button";
import styles from "./headerForm.module.css";
import { useNavigate } from "react-router-dom";

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
}) {
  let navigate = useNavigate();
  const classButton = button ? "button" : "";
  return (
    <header className={`${styles["wrapper-header"]} ${styles[classButton]}`}>
      {backButton && (
        <IconButton type="back" text="뒤로 가기" onClick={() => navigate(-1)} />
      )}
      {title && <h1 className={styles[titleSize]}>{title}</h1>}
      {searchButton && <IconButton type="search" text="검색" onClick={""} />}
      {menuButton && <IconButton type="menu" text="더보기" onClick={""} />}
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
  );
}

export default HeaderForm;
