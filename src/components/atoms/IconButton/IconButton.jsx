import styles from "./IconButton.module.css";

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
