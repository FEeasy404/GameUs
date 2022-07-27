import { BASE_URL } from "../../common/BASE_URL";

const TOKEN = window.sessionStorage.getItem("token");

async function getProfile(accountname, setProfile) {
  try {
    const data = await fetch(BASE_URL + `/profile/${accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    setProfile(result.profile);
  } catch (error) {
    console.log(error.message);
  }
}

// 사용자의 상품 리스트를 받아오는 함수입니다.
async function getProducts(accountname, setProducts) {
  try {
    const data = await fetch(BASE_URL + `/product/${accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    setProducts(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function getPosts(accountname, setPosts) {
  try {
    const data = await fetch(BASE_URL + `/post/${accountname}/userpost`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    setPosts(result.post);
  } catch (error) {
    console.log(error.message);
  }
}

export { getProfile, getProducts, getPosts };
