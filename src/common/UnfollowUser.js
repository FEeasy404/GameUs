import { BASE_URL } from "./BASE_URL";

async function unfollowUser(TOKEN, accountname, setChangeFollow) {
  try {
    await fetch(BASE_URL + `/profile/${accountname}/unfollow`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
  setChangeFollow(accountname + "false");
}
export { unfollowUser };
