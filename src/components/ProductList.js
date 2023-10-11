import { useEffect, useState } from "react";
import { apiClient } from "../utils/apiClient";

const getProductList = () => {
  return apiClient({
    url: "/products",
    method: "GET",
    // baseURL: "http://localhost:4000",
  });
};
function ProductList() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    (async () => {
      const products = await getProductList();
      setProductList(products);
    })();
  });

  console.log(productList);
  return (
    <>
      {productList && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {productList.map((product) => {
            return (
              <div key={product.id}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{
                    width: "300px",
                    height: "300px",
                    border: "1px solid red",
                  }}
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
