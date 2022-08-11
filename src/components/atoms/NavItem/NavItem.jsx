import { Link, useNavigate } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem({ link, label, icon }) {
  // 현재 path가 props로 받아온 링크와 일치하면 currunt는 true
  const currunt = location.pathname === link;

  return (
    <Link
      to={link}
      onClick={() => {
        if (label === "프로필") {
          window.location.reload();
          useNavigate(link);
        }
      }}
      className={`${styles.link} ${styles[icon]} ${
        currunt ? styles.active : null
      }`}
    >
      <span className={styles.label}>{label}</span>
    </Link>
  );
}

export default NavItem;
