// import { apiClient } from "./utils/apiClient";

// // 상품 목록 호출 함수
// const getMainBar = () => {
//   return apiClient({
//     url: "/",
//   });
// };

export default function MainBar() {
  return (
    <div>
      <div>
        <header>
          free shipping above € 100 in the Netherlands
          <button>shopping cart</button>
          <button>log in</button>
        </header>
      </div>
      <h1>sticky lemon</h1>
      <button>shop all</button>
      <button>bags</button>
      <button>footwear</button>
      <button>accessories</button>
    </div>
  );
}
