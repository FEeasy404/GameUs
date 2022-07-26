import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { BASE_URL } from "../../common/BASE_URL";

async function handleEdit(error, value, isAccountnameValid) {
  const TOKEN = window.localStorage.getItem("token");
  // 에러가 없고 계정 ID가 유효하다면 context에 이미지, 사용자 이름, 계정 ID, 소개를 저장합니다.
  if (!error.username && !error.accountname && isAccountnameValid) {
    if (value.image) {
      const resizedImage = await handleImageSize(value.image.data);
      const imageUrl = await uploadImage(resizedImage);
      value.image = imageUrl;
      URL.revokeObjectURL(value.image.src);
    }
    // 이미지를 선택하지 않았다면 기본 이미지로 설정됩니다.
    else {
      value.image = "https://mandarin.api.weniv.co.kr/1658306906297.png";
    }
    const reqBody = { user: { ...value } };
    try {
      const data = await fetch(BASE_URL + "/user", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const result = await data.json();
      window.localStorage.removeItem("accountname");
      window.localStorage.setItem("accountname", result.user.accountname);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export { handleEdit };
