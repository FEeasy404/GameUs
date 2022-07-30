import { BASE_URL } from "../../common/BASE_URL";

async function getProductData(
  TOKEN,
  productId,
  setImage,
  setName,
  setPrice,
  setLink
) {
  try {
    const data = await fetch(BASE_URL + `/product/detail/${productId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    const product = result.product;
    setImage({
      src: product.itemImage,
    });
    setLink(product.link);
    setName(product.itemName);
    setPrice(product.price);
  } catch (error) {
    console.log(error.message);
  }
}

async function editProductData(TOKEN, productId, name, price, link, fileUrl) {
  const data = {
    product: {
      itemName: name,
      price: price,
      link: link,
      itemImage: fileUrl,
    },
  };
  try {
    fetch(BASE_URL + `/product/${productId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error.message);
  }
}

export { getProductData, editProductData };
