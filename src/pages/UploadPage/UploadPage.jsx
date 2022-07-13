import { useState } from "react";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ImageInputButton from "../../components/atoms/ImageInputButton/ImageInputButton";
import PostForm from "../../components/organisms/PostForm/PostForm";
import styles from "./uploadPage.module.css";

function UploadPage() {
  const [images, setImages] = useState([]);
  function saveImage(event) {
    let copyImages = [...images];
    for (let i = 0; i < event.target.files.length; i++) {
      const image = {
        key: Date.now() + i,
        src: URL.createObjectURL(event.target.files[i]),
      };
      copyImages.unshift(image);
    }
    setImages(copyImages);
  }
  function handleDeleteBtn(key) {
    const imagesArr = images.filter((item) => item.key !== key);
    setImages(imagesArr);
  }
  return (
    <div className={styles["wrapper-page"]}>
      <HeaderForm backButton={true} button="업로드" />
      <PostForm images={images} handleDeleteBtn={handleDeleteBtn} />
      <ImageInputButton saveImage={saveImage} size="medium" multiple={true} />
    </div>
  );
}

export default UploadPage;
