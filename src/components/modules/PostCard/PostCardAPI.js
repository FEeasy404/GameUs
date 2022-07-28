import { BASE_URL } from "../../../common/BASE_URL";
const TOKEN = window.localStorage.getItem("token");

//게시물 삭제
async function deletePost(postId, setDeletePost) {
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
async function reportPost(postId) {
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

export { deletePost, reportPost };
