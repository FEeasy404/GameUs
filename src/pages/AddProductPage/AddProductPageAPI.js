const BASE_URL = "https://mandarin.api.weniv.co.kr";
const TOKEN = window.localStorage.getItem("token");

async function postProduct(price, link, fileUrl) {
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
