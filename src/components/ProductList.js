import { useEffect, useState } from 'react';
import { apiClient } from '../utils/apiClient';
import '../lib/styles/main.css';

function ProductList() {
  //  서버와 통신
  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiClient({ url: '/shopall' });
        setItemInfo(result);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.');
      }
    };

    fetchData();
  }, []);

  console.log(itemInfo);

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
                  <p>
                    {product.id} + {product.name}
                  </p>
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
