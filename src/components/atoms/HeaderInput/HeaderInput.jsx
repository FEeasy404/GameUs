import styles from "./headerInput.module.css";

function HeaderInput({ placeholder, onChange }) {
  return (
    <form action="#" className={styles["form-input"]}>
      <input
        type="text"
        title={placeholder}
        placeholder={placeholder}
        onChange={onChange}
        className={styles["input-find"]}
      ></input>
    </form>
  );
}

export default HeaderInput;
