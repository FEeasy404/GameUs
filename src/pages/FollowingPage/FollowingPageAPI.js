import { BASE_URL } from "../../common/BASE_URL";

async function getFollowings(accountname, setFollowings) {
  const TOKEN = window.localStorage.getItem("token");
  try {
    const data = await fetch(
      BASE_URL + `/profile/${accountname}/following?limit=Infinity`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
      }
    );
    const result = await data.json();
    setFollowings(result);
  } catch (error) {
    console.log(error.message);
  }
}

export { getFollowings };
