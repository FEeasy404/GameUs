import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ImageInputButton from "../../components/atoms/ImageInputButton/ImageInputButton";
import UploadForm from "../../components/organisms/UploadForm/UploadForm";
import styles from "./uploadPage.module.css";

function UploadPage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const baseURL = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
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
  //이미지 업로드 제한 & 프리뷰
  async function saveImage(event) {
    const files = event.target.files;
    if (!files) return;
    if (images.length + files.length > 3) {
      alert("이미지는 3개까지 업로드 가능합니다.");
      return;
    }
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
    setImages(copyImages);
  }
  //이미지 리사이즈
  async function handleImageSize(file) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
    };
    try {
      const blobFile = await imageCompression(file, options);
      const newFile = new File([blobFile], `${blobFile.name}`, {
        type: blobFile.type,
      });
      return newFile;
    } catch (error) {
      console.log(error);
    }
  }
  //여러장 이미지 업로드
  async function multipleImageUpload(files) {
    let fileNames = [];
    const imageReqPath = "/image/uploadfile";
    try {
      for (let file of files) {
        const formData = new FormData();
        formData.append("image", file);
        const res = await fetch(baseURL + imageReqPath, {
          method: "POST",
          body: formData,
        });
        const json = await res.json();
        const filename = await json.filename;
        fileNames.push(filename);
      }
      if (fileNames.length > 1) {
        return fileNames.join(",");
      } else {
        return fileNames[0];
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleuploadImages() {
    const imageArr = [];
    for (let file of images) {
      imageArr.push(await handleImageSize(file.data));
    }
    return await multipleImageUpload(imageArr);
  }
  //데이터 업로드
  async function uploadData(imageNames) {
    const imageData = imageNames
      .split(",")
      .map((name) => baseURL + "/" + name)
      .join(",");
    const data = {
      post: {
        content: text,
        image: imageData,
      },
    };
    try {
      fetch(baseURL + "/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  //업로드 버튼
  async function handleUploadButton() {
    const imageNames = await handleuploadImages();
    await uploadData(imageNames);
    //메모리 누수 방지
    images.forEach((file) => URL.revokeObjectURL(file.src));
    navigate(`/profile/${myAccountname}`);
  }

  return (
    <div className={styles["wrapper-page"]}>
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
    </div>
  );
}

export default UploadPage;
