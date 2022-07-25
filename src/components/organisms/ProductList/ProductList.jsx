import React, { useState } from "react";
import Product from "../../modules/Product/Product";
import styles from "./productList.module.css";
import Modal from "../Modal/Modal";

function ProductList({ isMyProfile, products }) {
  const [onModal, setOnModal] = useState(false);
  const [link, setLink] = useState("");

  function navigateLink(link) {
    window.open(link, "_blank");
  }

  return (
    <>
      <section className={styles["wrapper-products"]}>
        <h2 className={styles["title"]}>판매 중인 상품</h2>
        {products.data > 0 ? (
          <ul className={styles["list-product"]}>
            {products.product.map((product, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (isMyProfile) {
                      setLink(product.link);
                      setOnModal(!onModal);
                    } else {
                      navigateLink(product.link);
                    }
                  }}
                >
                  <Product product={product} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles["message"]}>판매 중인 상품이 없어요.</p>
        )}
      </section>

      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          buttons={[
            { text: "삭제", onClick: () => {} },
            { text: "수정", onClick: () => {} },
            {
              text: "웹사이트에서 상품 보기",
              onClick: () => navigateLink(link),
            },
          ]}
          name="상품 게시글"
        />
      )}
    </>
  );
}

export default ProductList;
