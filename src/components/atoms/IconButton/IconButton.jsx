import styles from "./IconButton.module.css";

function HeaderButton({ type, text, onClick }) {
  return (
    <button
      type="button"
      className={`${styles["button"]} ${styles[type]}`}
      onClick={onClick}
    >
      <span className="a11y-hidden">{text}</span>
    </button>
  );
}

export default HeaderButton;
