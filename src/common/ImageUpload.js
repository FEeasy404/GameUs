const BASE_URL = "https://mandarin.api.weniv.co.kr";

//이미지 업로드
async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const imageReqPath = "/image/uploadfile";
    const res = await fetch(BASE_URL + imageReqPath, {
      method: "POST",
      body: formData,
    });
    const json = await res.json();
    const filename = await json.filename;
    return BASE_URL + "/" + filename;
  } catch (error) {
    console.log(error.message);
  }
}

//여러장 이미지 업로드
async function uploadmultipleImages(files) {
  let fileNames = [];
  try {
    for (let file of files) {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch(BASE_URL + "/image/uploadfile", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      const filename = await json.filename;
      fileNames.push(filename);
    }
    if (fileNames.length > 1) {
      return fileNames.join(",");
    } else {
      return fileNames[0];
    }
  } catch (error) {
    console.log(error.message);
  }
}

export { uploadImage, uploadmultipleImages };
