import ImageInputForm from "../../modules/ImageInputForm/ImageInputForm";
import ProductTextInput from "../../modules/ProductTextInput/ProductTextInput";
import styles from "./addProduct.module.css";

function AddProduct({ setName, setPrice, setLink, setImage, image }) {
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
      />
    </section>
  );
}

export default AddProduct;
