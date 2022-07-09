import styles from "./imageInputButton.module.css";

function ImageInputButton({ selectFile, saveImage, color, size }) {
  function openFile() {
    selectFile.current.click();
  }
  return (
    <div>
      <input
        type="file"
        accept="img/*"
        onChange={saveImage}
        ref={selectFile}
        className={styles["input-file"]}
      />
      <button
        type="button"
        className={`${styles["button-select"]} ${styles[size]} ${styles[color]}`}
        onClick={openFile}
      >
        <span className="a11y-hidden">이미지 추가</span>
      </button>
    </div>
  );
}

export default ImageInputButton;
