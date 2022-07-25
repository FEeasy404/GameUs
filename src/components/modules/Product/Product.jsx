import React from "react";
// import { Link } from "react-router-dom";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./product.module.css";

function Product({ product }) {
  return (
    <div className={styles["wrapper-product"]}>
      <ImageBox type="rounded_square" size="small" src={product.itemImage} alt="" />
      <span className={styles["product_name"]}>{product.itemName}</span>
      <strong className={styles["product_price"]}>
        {product.price.toLocaleString("en-US")}원
      </strong>
    </div>
  );
}

export default Product;
