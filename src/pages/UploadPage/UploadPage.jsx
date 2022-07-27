import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { uploadData } from "./UploadAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import UploadForm from "../../components/organisms/UploadForm/UploadForm";

function UploadPage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const myAccountname = window.localStorage.getItem("accountname");

  //이미지 업로드
  async function handleuploadImages(images) {
    const imageArr = [];
    for (let file of images) {
      imageArr.push(await handleImageSize(file.data));
    }
    return await uploadImage(imageArr);
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
    <section>
      <h1 className="a11y-hidden">상품 등록 페이지</h1>
      <HeaderForm
        backButton={true}
        button="업로드"
        onClick={handleUploadButton}
        active={text && true}
      />
      <div className="wrapper-contents">
        <UploadForm images={images} setText={setText} setImages={setImages} />
      </div>
    </section>
  );
}

export default UploadPage;
