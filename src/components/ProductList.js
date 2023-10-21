import { useEffect, useState } from 'react';
import { apiClient } from '../utils/apiClient';
import '../lib/styles/main.css';
import axios from 'axios';

function ProductList() {
  //  서버와 통신
  const [itemInfo, setItemInfo] = useState(null);

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

  return (
    <>
      <body>
        {itemInfo && (
          <div className="products">
            <div>
              <ul>
                <li>
                  <button>shop all-sidebar</button>
                </li>
              </ul>
            </div>
            {itemInfo.map((product) => {
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
      </body>
    </>
  );
}

export default ProductList;
