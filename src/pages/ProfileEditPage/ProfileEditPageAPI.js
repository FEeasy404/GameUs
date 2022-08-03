import { BASE_URL } from "../../common/BASE_URL";

async function editProfile(TOKEN, reqData) {
  try {
    console.log(reqData);
    const data = await fetch(BASE_URL + "/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export { editProfile };
