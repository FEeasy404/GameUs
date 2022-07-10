import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./product.module.css";

function Product({ src, name, price }) {
  return (
    <div className={styles["wrapper-product"]}>
      <ImageBox type="rounded_square" size="small" src={src} alt="" />
      <span className={styles["product_name"]}>{name}</span>
      <strong className={styles["product_price"]}>{price.toLocaleString("en-US")}원</strong>
    </div>
  );
}

export default Product;
