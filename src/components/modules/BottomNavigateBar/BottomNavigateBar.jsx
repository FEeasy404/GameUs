import { Link } from "react-router-dom";
import styles from "./bottomNavigateBar.module.css";

function BottomBar() {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list-nav"]}>
        <li className={`${styles["item-nav"]} ${styles["home"]}`}>
          <Link to={"/"}>홈</Link>
        </li>
        <li className={`${styles["item-nav"]} ${styles["chat"]}`}>
          <Link to={"/chat"}>채팅</Link>
        </li>
        <li className={`${styles["item-nav"]} ${styles["post"]}`}>
          <Link to={"/post"}>게시물 작성</Link>
        </li>
        <li className={`${styles["item-nav"]} ${styles["profile"]}`}>
          <Link to={"/profile"}>프로필</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BottomBar;
