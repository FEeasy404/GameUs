import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import styles from "./searchPage.module.css";

function SearchPage() {
  return (
    <>
      <HeaderForm backButton={true} input={true} />
      <ul className={styles["container-users"]}>
        <li className={styles["user"]}>
          애월읍 위니브 감귤농장
        </li>
        <li className={styles["user"]}>
          애월읍 위니브 감귤농장
        </li>
        <li className={styles["user"]}>
          애월읍 위니브 감귤농장
        </li>
      </ul>
    </>
  )
}

export default SearchPage
