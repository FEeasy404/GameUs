import { BASE_URL } from "./BASE_URL";

async function checkTokenValid(TOKEN) {
  try {
    const data = await fetch(BASE_URL + "/user/checktoken", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    });
    const result = await data.json();
    if(result.status === 401){
      return false;
    }
    const isValid = await result.isValid;
    return isValid;
  } catch (error) {
    console.log(error.message);
  }
}

export { checkTokenValid };
