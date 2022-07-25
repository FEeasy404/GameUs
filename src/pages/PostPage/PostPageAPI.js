const BASE_URL = "https://mandarin.api.weniv.co.kr";
const TOKEN = window.localStorage.getItem("token");

async function getPostData(postId, setPost) {
  try {
    const response = await fetch(BASE_URL + `/post/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    setPost(result.post);
  } catch (error) {
    console.log(error.message);
  }
}

async function getPostComment(postId, setComments) {
  try {
    const response = await fetch(BASE_URL + `/post/${postId}/comments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    setComments(result.comments.reverse());
  } catch (error) {
    console.log(error.message);
  }
}

async function uploadComment(postId, text) {
  const commentData = {
    comment: {
      content: text,
    },
  };
  try {
    await fetch(BASE_URL + `/post/${postId}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteComment(postId, commentId) {
  try {
    await fetch(BASE_URL + `/post/${postId}/comments/${commentId}`, {
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

export { getPostData, getPostComment, uploadComment, deleteComment };
