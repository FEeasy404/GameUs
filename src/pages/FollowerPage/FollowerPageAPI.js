import { BASE_URL } from "../../common/BASE_URL";

const TOKEN = window.sessionStorage.getItem("token");

async function getFollowers(accountname, setFollowers) {
  try {
    const data = await fetch(
      BASE_URL + `/profile/${accountname}/follower?limit=Infinity`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
      }
    );
    const result = await data.json();
    setFollowers(result);
  } catch (error) {
    console.log(error.message);
  }
}

export { getFollowers };
