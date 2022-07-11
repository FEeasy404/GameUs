import React from "react";
import Product from "../../modules/Product/Product";
import styles from "./productList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles["wrapper-products"]}>
      <h2 className={styles["title"]}>판매 중인 상품</h2>
      <ul className={styles["list-product"]}>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Product
                src={product.src}
                name={product.name}
                price={product.price}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
