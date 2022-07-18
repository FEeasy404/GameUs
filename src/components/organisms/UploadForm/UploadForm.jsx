import UploadText from "../../modules/UploadText/UploadText";
import UploadImage from "../../modules/UploadImage/UploadImage";
import styles from "./uploadForm.module.css";
function UploadForm({ images, handleText, handleDeleteBtn }) {
  return (
    <div className={styles["form-post"]}>
      <UploadText handleText={handleText} />
      {images.length === 1 ? (
        <UploadImage
          size="medium_large"
          item={images[0]}
          handleDeleteBtn={handleDeleteBtn}
        />
      ) : (
        <ul className={styles["list"]}>
          {images.map((item) => {
            return (
              <li key={item.key}>
                <UploadImage
                  size="medium_small"
                  item={item}
                  handleDeleteBtn={handleDeleteBtn}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default UploadForm;
