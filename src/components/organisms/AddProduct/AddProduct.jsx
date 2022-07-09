import ImageInputForm from "../../modules/ImageInputForm/ImageInputForm";
import ProductTextInput from "../../modules/ProductTextInput/ProductTextInput";
import styles from "./addProduct.module.css";

function AddProduct() {
  return (
    <section className={`${styles["form-wrapper"]} wrapper-padding`}>
      <h2>이미지 등록</h2>
      <ImageInputForm
        a11y="이미지 미리보기"
        boxType="rounded_square"
        boxSize="large"
        buttonColor="gray"
      />
      <ProductTextInput />
    </section>
  );
}

export default AddProduct;
