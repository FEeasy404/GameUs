import { BASE_URL } from "../../common/BASE_URL";

async function getFollowings(TOKEN, accountname, setFollowings) {
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
    console.log("rendering...");
  } catch (error) {
    console.log(error.message);
  }
}

export { getFollowings };
