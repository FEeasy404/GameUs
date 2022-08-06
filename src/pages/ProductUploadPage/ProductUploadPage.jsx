import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { postProduct } from "./ProductUploadPageAPI";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import AddProduct from "../../components/organisms/AddProduct/AddProduct";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function ProductUploadPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const { user } = useContext(LoginedUserContext);

  //저장 버튼
  async function handleSubmit() {
    const compressedFile = await handleImageSize(image.data);
    const fileUrl = await uploadImage(compressedFile);
    await postProduct(user.token, name, price, link, fileUrl);
    URL.revokeObjectURL(image.src);
    navigate(`/profile/${user.accountname}`);
  }

  return (
    <section className="wrapper-contents">
      <h2 className="a11y-hidden">상품 등록 페이지</h2>
      <HeaderForm
        backButton={true}
        button="저장"
        onClick={handleSubmit}
        active={name && price && link && image && true}
      />
      <AddProduct
        setName={setName}
        setPrice={setPrice}
        setLink={setLink}
        setImage={setImage}
        image={image.src}
      />
    </section>
  );
}

export default ProductUploadPage;
