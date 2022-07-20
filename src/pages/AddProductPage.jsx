import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import AddProduct from "../components/organisms/AddProduct/AddProduct";

function AddProductPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  const baseURL = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
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
  //이미지 저장
  async function imageUpload(file) {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const imageReqPath = "/image/uploadfile";
      const res = await fetch(baseURL + imageReqPath, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      const filename = await json.filename;
      return baseURL + "/" + filename;
    } catch (error) {
      console.log(error.message);
    }
  }

  //텍스트 저장
  function handleName(event) {
    const name = event.target.value.trim();
    setName(name);
    if (name.length < 2) {
      setNameError(true);
      return;
    }
    setNameError(false);
  }
  function handlePrice(event) {
    const price = event.target.value.replace(/,/g, "");
    if (isNaN(price)) {
      setPriceError(true);
      event.target.value = "";
      return;
    }
    setPriceError(false);
    event.target.value = Number(price).toLocaleString("en-US");
    setPrice(Number(price));
  }
  function handleLink(event) {
    setLink(event.target.value.trim());
  }

  //상품 업로드
  async function postProduct(fileUrl) {
    const data = {
      product: {
        itemName: name,
        price: price,
        link: link,
        itemImage: fileUrl,
      },
    };
    try {
      fetch(baseURL + "/product", {
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

  //제출 버튼
  async function handleSubmit() {
    const compressedFile = await handleImageSize(image.data);
    const fileUrl = await imageUpload(compressedFile);
    await postProduct(fileUrl);
    URL.revokeObjectURL(image.src);
    navigate(`/profile/${myAccountname}`);
  }

  return (
    <>
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
    </>
  );
}

export default AddProductPage;
