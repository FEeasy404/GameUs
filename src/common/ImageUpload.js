const BASE_URL = "https://mandarin.api.weniv.co.kr";

//이미지 업로드 - 한 개, 여러개
async function uploadImage(files) {
  const fileArr = Array.isArray(files) ? [...files] : [files];
  let fileUrls = [];
  try {
    for (let file of fileArr) {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch(BASE_URL + "/image/uploadfile", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      fileUrls.push(`${BASE_URL}/${json.filename}`);
    }
    if (fileUrls.length > 1) {
      return fileUrls.join(",");
    } else {
      return fileUrls[0];
    }
  } catch (error) {
    console.log(error.message);
  }
}

export { uploadImage };
