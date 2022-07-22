import imageCompression from "browser-image-compression";

//이미지 리사이즈
async function handleImageSize(file) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 500,
  };
  try {
    const blobFile = await imageCompression(file, options);
    const newFile = new File([blobFile], `${blobFile.name}`, {
      type: blobFile.type,
    });
    return newFile;
  } catch (error) {
    console.log(error);
  }
}

export { handleImageSize };
