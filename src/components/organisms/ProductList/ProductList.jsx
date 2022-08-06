import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../modules/ProductCard/ProductCard";
import styles from "./productList.module.css";
import Modal from "../Modal/Modal";
import { deleteProduct } from "./ProductListAPI";
import { useContext } from "react";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import { getProducts } from "../../../pages/ProfilePage/ProfilePageAPI";


function ProductList({ isMyProfile, products, setProducts }) {
  const navigate = useNavigate();
  const [onModal, setOnModal] = useState(false);
  const [link, setLink] = useState("");
  const [productId, setProductId] = useState("");
  const { user } = useContext(LoginedUserContext);

  //상품 삭제
  async function handleDeletePost(productId) {
    await deleteProduct(user.token, productId);
    getProducts(user.token, user.accountname, setProducts);
  }

  //상품 수정
  function handleEditPost() {
    navigate(`/product/edit/${productId}`);
  }

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
                      setProductId(product.id);
                    } else {
                      navigateLink(product.link);
                    }
                  }}
                >
                  <ProductCard product={product} />
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
            { text: "삭제", onClick: () => handleDeletePost(productId) },
            { text: "수정", onClick: () => handleEditPost(productId) },
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
