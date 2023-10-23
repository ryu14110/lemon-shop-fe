import { useState, useEffect } from 'react';
import { apiClient } from '../utils/apiClient';
import '../styles/main.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { dummyData } from '../sampleDB/sampleData';
// import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

import axios from 'axios';

function ProductList() {
  //  서버와 통신
  const [itemInfo, setItemInfo] = useState(dummyData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:4000');
        setItemInfo(result.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.');
      }
    };

    fetchData();
  }, []);
  // console.log(productList);

  const [productList, setProductList] = useState(dummyData);

  // const navigate = useNavigate();
  // function handleClickItem(itemId) {
  //   navigate(`/product?category=${groceries}`);
  // }b0e35228df745e0bfe54:src/components/main/ProductList.js

  return (
    <>
      <body>
        {itemInfo && (
          <div className="products">
            <div className="categories">
              Catergory
              <Sidebar />
            </div>

            {productList.map((product) => {
              return (
                <div key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="product"
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <h2>{product.title}</h2>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </body>
    </>
  );
}

export default ProductList;
