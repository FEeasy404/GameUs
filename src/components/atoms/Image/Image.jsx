import React from "react";
import "./image.css";

function UserProfileImage({ src, type, size, alt }) {
  return (
    <div className={`image ${type} ${size}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default UserProfileImage;
