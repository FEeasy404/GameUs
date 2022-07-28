import { BASE_URL } from "../../common/BASE_URL";

async function getPostData(TOKEN, postId, setPost) {
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

async function getPostComment(TOKEN, postId, setComments) {
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

async function uploadComment(TOKEN, postId, text) {
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

async function deleteComment(TOKEN, postId, commentId) {
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

async function reportComment(TOKEN, postId, commentId) {
  try {
    await fetch(BASE_URL + `/post/${postId}/comments/${commentId}/report`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export {
  getPostData,
  getPostComment,
  uploadComment,
  deleteComment,
  reportComment,
};
