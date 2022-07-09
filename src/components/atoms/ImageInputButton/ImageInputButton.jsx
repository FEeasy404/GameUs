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
        className={"a11y-hidden"}
      />
      <button
        type="button"
        className={`${styles["button-select"]} ${styles[size]} ${styles[color]}`}
        onClick={openFile}
      ></button>
    </div>
  );
}

export default ImageInputButton;
