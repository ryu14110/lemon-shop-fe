import { useEffect, useState } from 'react';
import { apiClient } from '../utils/apiClient';
import '../lib/styles/main.css';

function ProductList() {
  //  서버와 통신
  // const product = { id: 1, name: 'chodaegyun' };
  // return (
  //   <div key={product.id}>
  //     <p>
  //       {product.id} + {product.name}
  //     </p>
  //   </div>
  // );

  const [itemInfo, setItemInfo] = useState([{ id: 0, name: 'shopall' }]);

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

  //console.log(itemInfo);

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default ProductList;
