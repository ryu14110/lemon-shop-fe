import { useEffect, useState } from "react";
import { apiClient } from "../utils/apiClient";
import "../styles/main.css";

// 상품 목록 호출 함수
const getProductList = () => {
  return apiClient({
    url: "/products",
  });
};

function ProductList() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    (async () => {
      const products = await getProductList();
      setProductList(products);
    })();
  }, []);

  console.log(productList);
  return (
    <>
      {productList && (
        <div className="products">
          {productList.map((product) => {
            return (
              <div key={product.id}>
                <img
                  className="product"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProductList;
