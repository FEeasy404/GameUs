import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { postProduct } from "./AddProductPageAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import AddProduct from "../../components/organisms/AddProduct/AddProduct";

function AddProductPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const myAccountname = window.localStorage.getItem("accountname");
  //이미지 프리뷰
  async function saveImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    const image = {
      src: URL.createObjectURL(file),
      data: file,
    };
    setImage(image);
  }

  //상품명 처리
  function handleName(event) {
    const name = event.target.value.trim();
    setName(name);
    if (name.length < 2) {
      setNameError(true);
      return;
    }
    setNameError(false);
  }
  //가격 처리
  function handlePrice(event) {
    const price = event.target.value.replace(/,/g, "");
    if (!price) return;
    if (isNaN(price)) {
      setPriceError(true);
      event.target.value = "";
      return;
    }
    setPriceError(false);
    event.target.value = Number(price).toLocaleString("en-US");
    setPrice(Number(price));
  }
  //링크 처리
  function handleLink(event) {
    setLink(event.target.value.trim());
  }
  //저장 버튼
  async function handleSubmit() {
    const compressedFile = await handleImageSize(image.data);
    const fileUrl = await uploadImage(compressedFile);
    await postProduct(name, price, link, fileUrl);
    URL.revokeObjectURL(image.src);
    navigate(`/profile/${myAccountname}`);
  }

  return (
    <section>
      <h1 className="a11y-hidden">상품 등록 페이지</h1>
      <HeaderForm
        backButton={true}
        button="저장"
        onClick={handleSubmit}
        active={name && price && link && image && true}
      />
      <AddProduct
        saveImage={saveImage}
        image={image.src}
        handleName={handleName}
        handlePrice={handlePrice}
        handleLink={handleLink}
        maxLength="15"
        nameError={nameError}
        priceError={priceError}
      />
    </section>
  );
}

export default AddProductPage;
