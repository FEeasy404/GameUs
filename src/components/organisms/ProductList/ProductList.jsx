import React from "react";
import Product from "../../modules/Product/Product";
import styles from "./productList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles["wrapper-products"]}>
      <h2 className={styles["title"]}>판매 중인 상품</h2>
      {products.data > 0 ? (
        <ul className={styles["list-product"]}>
          {products.product.map((product, index) => {
            return (
              <li key={index}>
                <Product
                  link={product.link}
                  itemImage={product.itemImage}
                  itemName={product.itemName}
                  price={product.price}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles["message"]}>판매 중인 상품이 없어요.</p>
      )}
    </div>
  );
}

export default ProductList;
