import { BASE_URL } from "../../common/BASE_URL";

async function getPostData(TOKEN, postId, setText, setImages) {
  try {
    const response = await fetch(BASE_URL + `/post/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    const text = result.post.content;
    const imageUrl = result.post.image;
    setText(text);
    if (imageUrl.length !== 0) {
      const images = imageUrl.split(",").map((item, index) => {
        return {
          key: Date.now() + index,
          src: item,
        };
      });
      setImages(images);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function editPostData(TOKEN, postId, imageNames, text) {
  const imageData = imageNames ? imageNames : "";
  const data = {
    post: {
      content: text,
      image: imageData,
    },
  };
  try {
    fetch(BASE_URL + `/post/${postId}`, {
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

export { getPostData, editPostData };
