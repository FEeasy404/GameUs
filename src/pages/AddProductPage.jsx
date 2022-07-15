import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      const json = (await res).json();
      const filename = (await json).filename;
      return baseURL + "/" + filename;
    } catch (error) {
      console.log(error.message);
    }
  }
  async function saveImage(event) {
    const imageSrc = await imageUpload(event.target.files[0]);
    setImage(imageSrc);
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
  async function postProduct() {
    const data = {
      product: {
        itemName: name,
        price: price,
        link: link,
        itemImage: image,
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
    await postProduct();
    //profile/${accountname}로 수정필요
    navigate("/profile/weniv_Gameland");
  }

  return (
    <>
      <h1 className="a11y-hidden">상품 등록 페이지</h1>
      <HeaderForm
        backButton={true}
        button="저장"
        onClick={handleSubmit}
        active={image && name && price && link && true}
      />
      <AddProduct
        saveImage={saveImage}
        image={image}
        handleName={handleName}
        handlePrice={handlePrice}
        handleLink={handleLink}
        maxLenght="15"
        nameError={nameError}
        priceError={priceError}
      />
    </>
  );
}

export default AddProductPage;
