import { BASE_URL } from "../../../common/BASE_URL";
const TOKEN = window.localStorage.getItem("token");

async function deleteProduct(productId) {
  try {
    await fetch(BASE_URL + `/product/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export { deleteProduct };
