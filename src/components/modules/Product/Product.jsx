import React, { useLayoutEffect, useRef, useState } from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import styles from "./product.module.css";

function Product({ product }) {
  const price = useRef();
  const [isOverflow, setOverflow] = useState(false);

  useLayoutEffect(() => {
    if (price.current.scrollWidth > price.current.clientWidth) {
      setOverflow(true);
    }
  }, [price]);

  return (
    <div className={styles["wrapper-product"]}>
      <ImageBox
        type="rounded_square"
        size="small"
        src={product.itemImage}
        alt=""
      />
      <span className={styles["product_name"]} title={product.itemName}>
        {product.itemName}
      </span>
      <strong
        ref={price}
        className={
          isOverflow
            ? styles["product_price_overflow"]
            : styles["product_price"]
        }
        title={`${product.price.toLocaleString("en-US")}원`}
      >
        {product.price.toLocaleString("en-US")}
      </strong>
    </div>
  );
}

export default Product;
