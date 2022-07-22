const BASE_URL = "https://mandarin.api.weniv.co.kr";
const TOKEN = window.localStorage.getItem("token");

async function uploadData(imageNames, text) {
  const imageData = imageNames
    .split(",")
    .map((name) => BASE_URL + "/" + name)
    .join(",");
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
