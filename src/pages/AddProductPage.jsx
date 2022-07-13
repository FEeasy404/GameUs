import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import AddProduct from "../components/organisms/AddProduct/AddProduct";

function AddProductPage() {
  return (
    <>
      <h1 className="a11y-hidden">상품 등록 페이지</h1>
      <HeaderForm backButton={true} button="저장" />
      <AddProduct />
    </>
  );
}

export default AddProductPage;
