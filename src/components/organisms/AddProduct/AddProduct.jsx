import ImageInputForm from "../../modules/ImageInputForm/ImageInputForm";
import ProductTextInput from "../../modules/ProductTextInput/ProductTextInput";
import styles from "./addProduct.module.css";

function AddProduct({
  saveImage,
  image,
  handleName,
  handlePrice,
  handleLink,
  maxLength,
  nameError,
  priceError,
}) {
  return (
    <section className={`${styles["wrapper-form"]} wrapper-padding`}>
      <h2>이미지 등록</h2>
      <ImageInputForm
        a11y="이미지 미리보기"
        boxType="rounded_square"
        boxSize="large"
        buttonColor="gray"
        saveImage={saveImage}
        image={image}
      />
      <ProductTextInput
        handleName={handleName}
        handlePrice={handlePrice}
        handleLink={handleLink}
        maxLength={maxLength}
        nameError={nameError}
        priceError={priceError}
      />
    </section>
  );
}

export default AddProduct;
