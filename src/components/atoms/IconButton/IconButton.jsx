import styles from "./iconButton.module.css";

function IconButton({ type, text, onClick }) {
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

export default IconButton;
