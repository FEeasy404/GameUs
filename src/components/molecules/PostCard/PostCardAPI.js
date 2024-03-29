import { BASE_URL } from "../../../common/BASE_URL";

//게시물 삭제
async function deletePost(TOKEN, postId, setDeletePost) {
  try {
    await fetch(BASE_URL + `/post/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
  setDeletePost && setDeletePost(postId);
}

//게시물 신고
async function reportPost(TOKEN, postId) {
  try {
    await fetch(BASE_URL + `/post/${postId}/report`, {
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

// 좋아요
async function heartPost(TOKEN, postId) {
  try {
    const data = await fetch(BASE_URL + `/post/${postId}/heart`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

// 좋아요 취소
async function unheartPost(TOKEN, postId) {
  try {
    const data = await fetch(BASE_URL + `/post/${postId}/unheart`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export { deletePost, reportPost, heartPost, unheartPost };
