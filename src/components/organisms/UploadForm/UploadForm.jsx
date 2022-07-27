import UploadText from "../../modules/UploadText/UploadText";
import UploadImage from "../../modules/UploadImage/UploadImage";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";
import styles from "./uploadForm.module.css";

function UploadForm({ images, setText, setImages, text }) {
  function handleText(event) {
    setText(event.target.value);
  }
  //이미지 삭제 버튼
  function handleDeleteBtn(key) {
    const imagesArr = images.filter((item) => item.key !== key);
    setImages(imagesArr);
  }
  //이미지 프리뷰
  function previewMultipleImages(files) {
    const copyImages = [...images];
    for (let i = 0; i < files.length; i++) {
      const image = {
        key: Date.now() + i,
        src: URL.createObjectURL(files[i]),
        data: files[i],
      };
      if (files.length === 1) {
        copyImages.unshift(image);
      } else {
        copyImages.push(image);
      }
    }
    return copyImages;
  }
  //이미지 추가
  function saveImage(event) {
    const files = event.target.files;
    if (!files) return;
    if (images.length + files.length > 3) {
      alert("이미지는 3개까지 업로드 가능합니다.");
      return;
    }
    const imageData = previewMultipleImages(files);
    setImages(imageData);
  }

  return (
    <div className={styles["form-post"]}>
      <UploadText handleText={handleText} text={text} />
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
      <div className={styles["wrapper-bottom"]}>
        <ImageInputButton saveImage={saveImage} size="medium" multiple={true} />
      </div>
    </div>
  );
}

export default UploadForm;
