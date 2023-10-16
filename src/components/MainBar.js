// import { apiClient } from "./utils/apiClient";
import styled from "styled-component";

// // 상품 목록 호출 함수
// const getMainBar = () => {
//   return apiClient({
//     url: "/",
//   });
// };

export default function MainBar() {
  return (
    <div>
      <Container>
        <header>
          free shipping above € 100 in the Netherlands
          <button>shopping cart</button>
          <button>sign in</button>
        </header>
      </Container>
      <h1>sticky lemon</h1>
      <button>shop all</button>
      <button>bags</button>
      <button>footwear</button>
      <button>accessories</button>
    </div>
  );
}

export const Container = styled.div`
  background-color: #f0f1f3;
`;
