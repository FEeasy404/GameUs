import React from "react";
import ImageInputForm from "../../molecules/ImageInputForm/ImageInputForm";
import ProductTextInput from "../../molecules/ProductTextInput/ProductTextInput";
import styles from "./addProduct.module.css";

function AddProduct({
  setName,
  setPrice,
  setLink,
  setImage,
  image,
  name,
  price,
  link,
}) {
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
  return (
    <section className={`${styles["wrapper-form"]} wrapper-padding`}>
      <h3>이미지 등록</h3>
      <ImageInputForm
        a11y="이미지 미리보기"
        boxType="rounded_square"
        boxSize="large"
        buttonColor="gray"
        saveImage={saveImage}
        image={image}
      />
      <ProductTextInput
        setName={setName}
        setPrice={setPrice}
        setLink={setLink}
        name={name}
        price={price}
        link={link}
      />
    </section>
  );
}

export default AddProduct;
