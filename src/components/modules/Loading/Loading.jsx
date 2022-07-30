import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles["container"]}>
      <div className={styles["balls"]}>
        <div className={styles["ball1"]}></div>
        <div className={styles["ball2"]}></div>
        <div className={styles["ball3"]}></div>
      </div>
    </div>
  );
}

export default Loading;
