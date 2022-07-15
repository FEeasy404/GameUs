import { useRef } from "react";
import styles from "./imageInputButton.module.css";

function ImageInputButton({ saveImage, color, size, multiple }) {
  const selectFile = useRef("");
  function openFile() {
    selectFile.current.click();
  }
  return (
    <div>
      <input
        type="file"
        accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
        onChange={saveImage}
        ref={selectFile}
        className={styles["file-input"]}
        multiple={multiple}
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
