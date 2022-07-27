import NavItem from "../../atoms/NavItem/NavItem";
import styles from "./bottomNavigateBar.module.css";

function BottomNavigateBar() {
  const accountname = window.sessionStorage.getItem("accountname");

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list-nav"]}>
        <li className={`${styles["item-nav"]} ${styles["home"]}`}>
          <NavItem link={"/feed"} label={"홈"} icon={"home"} />
        </li>
        <li className={`${styles["item-nav"]} ${styles["chat"]}`}>
          <NavItem link={"/chat"} label={"채팅"} icon={"chat"} />
        </li>
        <li className={`${styles["item-nav"]} ${styles["post"]}`}>
          <NavItem link={"/post"} label={"게시물 작성"} icon={"post"} />
        </li>
        <li className={`${styles["item-nav"]} ${styles["profile"]}`}>
          <NavItem
            link={`/profile/${accountname}`}
            label={"프로필"}
            icon={"profile"}
          />
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavigateBar;
