import React from "react";
// import { Link } from "react-router-dom";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./product.module.css";

function Product({ link, itemImage, itemName, price }) {
  return (
    <div className={styles["wrapper-product"]}>
      <a href={link}>
        <ImageBox type="rounded_square" size="small" src={itemImage} alt="" />
        <span className={styles["product_name"]}>{itemName}</span>
        <strong className={styles["product_price"]}>
          {price.toLocaleString("en-US")}원
        </strong>
      </a>
    </div>
  );
}

export default Product;
