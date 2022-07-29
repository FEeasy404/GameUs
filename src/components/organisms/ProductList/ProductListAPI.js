import { BASE_URL } from "../../../common/BASE_URL";

async function deleteProduct(TOKEN, productId) {
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
