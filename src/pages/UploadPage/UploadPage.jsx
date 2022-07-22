import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleImageSize } from "../../common/ImageResize";
import { uploadmultipleImages } from "../../common/ImageUpload";
import { uploadData } from "./UploadAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ImageInputButton from "../../components/atoms/ImageInputButton/ImageInputButton";
import UploadForm from "../../components/organisms/UploadForm/UploadForm";
import styles from "./uploadPage.module.css";

function UploadPage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const myAccountname = window.localStorage.getItem("accountname");

  //텍스트 처리
  function handleText(event) {
    setText(event.target.value);
  }
  //이미지 삭제 버튼
  function handleDeleteBtn(key) {
    const imagesArr = images.filter((item) => item.key !== key);
    setImages(imagesArr);
  }
  //이미지 업로드 제한
  function limitUploadImage(files) {
    if (!files) return;
    if (images.length + files.length > 3) {
      alert("이미지는 3개까지 업로드 가능합니다.");
      return;
    }
  }
  //이미지 프리뷰
  function previewMultipleImages(files) {
    const copyImages = [...images];
    console.log(files);
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
  function saveImage(event) {
    const files = event.target.files;
    limitUploadImage(files);
    const images = previewMultipleImages(files);
    setImages(images);
  }
  //이미지 업로드
  async function handleuploadImages(images) {
    const imageArr = [];
    for (let file of images) {
      imageArr.push(await handleImageSize(file.data));
    }
    return await uploadmultipleImages(imageArr);
  }

  //업로드 버튼
  async function handleUploadButton() {
    const imageNames = await handleuploadImages(images);
    await uploadData(imageNames, text);
    //메모리 누수 방지
    images.forEach((file) => URL.revokeObjectURL(file.src));
    navigate(`/profile/${myAccountname}`);
  }

  return (
    <section className={styles["wrapper-page"]}>
      <h1 className="a11y-hidden">상품 등록 페이지</h1>
      <HeaderForm
        backButton={true}
        button="업로드"
        onClick={handleUploadButton}
        active={text && images.length > 0 && true}
      />
      <UploadForm
        images={images}
        handleText={handleText}
        handleDeleteBtn={handleDeleteBtn}
      />
      <div className={styles["wrapper-bottom"]}>
        <ImageInputButton saveImage={saveImage} size="medium" multiple={true} />
      </div>
    </section>
  );
}

export default UploadPage;
