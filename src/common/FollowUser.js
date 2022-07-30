import { BASE_URL } from "./BASE_URL";

async function followUser(TOKEN, accountname) {
  try {
    await fetch(BASE_URL + `/profile/${accountname}/follow`, {
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
export { followUser };
