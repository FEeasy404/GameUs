import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { getProductData, editProductData } from "./ProductEditPageAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import AddProduct from "../../components/organisms/AddProduct/AddProduct";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function ProductEditPage() {
  let { productId } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const { user } = useContext(LoginedUserContext);

  useEffect(() => {
    getProductData(user.token, productId, setImage, setName, setPrice, setLink);
  }, [productId]);

  //저장 버튼
  async function handleSubmit() {
    let fileUrl;
    if (image.data) {
      const resizedImage = await handleImageSize(image.data);
      fileUrl = await uploadImage(resizedImage);
    } else {
      fileUrl = image.src;
    }
    await editProductData(user.token, productId, name, price, link, fileUrl);
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
        name={name}
        price={price}
        link={link}
      />
    </section>
  );
}

export default ProductEditPage;
