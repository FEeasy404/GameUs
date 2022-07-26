import { BASE_URL } from "../../common/BASE_URL";

async function postRegister(reqData) {
  try {
    await fetch(BASE_URL + "/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
  } catch (error) {
    console.log(error.message);
  }
}

export { postRegister };
