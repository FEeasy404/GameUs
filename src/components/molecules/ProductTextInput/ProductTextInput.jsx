import { useState } from "react";
import InputBox from "../../atoms/InputBox/InputBox";

function ProductTextInput({ setName, setPrice, setLink, name, price, link }) {
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  //상품명 처리
  function handleName(event) {
    const name = event.target.value.trim();
    setName(name);
    if (name.length < 2) {
      setNameError(true);
      return;
    }
    setNameError(false);
  }
  //가격 처리
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
  //링크 처리
  function handleLink(event) {
    setLink(event.target.value.trim());
  }
  return (
    <div>
      <InputBox
        id="product"
        type="text"
        name="상품명"
        placeholder="2~15자 이내여야 합니다."
        maxLength="15"
        onChange={handleName}
        error={nameError && "상품명은 2~15자 이내여야 합니다."}
        value={name && name}
      />
      <InputBox
        id="price"
        type="text"
        name="가격"
        placeholder="숫자만 입력 가능합니다."
        maxLength="11"
        onChange={handlePrice}
        error={priceError && "숫자만 입력 가능합니다"}
        value={price && price.toLocaleString("en-US")}
      />
      <InputBox
        id="link"
        type="text"
        name="판매 링크"
        placeholder="URL을 입력해주세요."
        onChange={handleLink}
        value={link && link}
      />
    </div>
  );
}

export default ProductTextInput;
