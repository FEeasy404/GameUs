import InputBox from "../../atoms/InputBox/InputBox";

function ProductTextInput({
  handleName,
  handlePrice,
  handleLink,
  maxLength,
  nameError,
  priceError,
}) {
  return (
    <div>
      <InputBox
        id="product"
        type="text"
        name="상품명"
        placeholder="2~15자 이내여야 합니다."
        onChange={handleName}
        maxLength={maxLength}
        error={nameError && "상품명은 2~15자 이내여야 합니다."}
      />
      <InputBox
        id="price"
        type="text"
        name="가격"
        placeholder="숫자만 입력 가능합니다."
        onChange={handlePrice}
        error={priceError && "숫자만 입력 가능합니다"}
      />
      <InputBox
        id="link"
        type="text"
        name="판매 링크"
        placeholder="URL을 입력해주세요."
        onChange={handleLink}
      />
    </div>
  );
}

export default ProductTextInput;
