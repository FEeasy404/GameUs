import { BASE_URL } from "../../common/BASE_URL";

async function uploadData(TOKEN, imageNames, text) {
  const imageData = imageNames ? imageNames : "";
  const data = {
    post: {
      content: text,
      image: imageData,
    },
  };
  try {
    fetch(BASE_URL + "/post", {
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

export { uploadData };
