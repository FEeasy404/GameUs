import { BASE_URL } from "../../common/BASE_URL";

async function postProduct(TOKEN, name, price, link, fileUrl) {
  const data = {
    product: {
      itemName: name,
      price: price,
      link: link,
      itemImage: fileUrl,
    },
  };
  try {
    fetch(BASE_URL + "/product", {
      method: "POST",
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

export { postProduct };
