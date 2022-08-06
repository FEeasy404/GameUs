import ImageBox from "../../atoms/ImageBox/ImageBox";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";
import styles from "./imageInputForm.module.css";

function ImageInputForm({
  a11y,
  boxType,
  boxSize,
  buttonColor,
  saveImage,
  image,
}) {
  return (
    <div className={`${styles["image-input"]} ${styles[boxType]}`}>
      {a11y && <p className="a11y-hidden">{a11y}</p>}
      <ImageBox src={image} type={boxType} size={boxSize} />
      <ImageInputButton
        saveImage={saveImage}
        color={buttonColor}
        boxType={boxType}
        size="medium"
      />
    </div>
  );
}

export default ImageInputForm;
