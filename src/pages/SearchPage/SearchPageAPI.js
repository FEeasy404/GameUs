import { BASE_URL } from "../../common/BASE_URL";

async function getSearchUser(TOKEN, keyword, setSeacrhUser) {
  try {
    const response = await fetch(
      BASE_URL + `/user/searchuser/?keyword=${keyword}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    setSeacrhUser(result);
  } catch (error) {
    console.log(error.message);
  }
}

export { getSearchUser };
