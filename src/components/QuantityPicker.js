import React, { useState } from 'react';
import styled from 'styled-components';

const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

// const ResultContainer = styled.div`
//   margin-top: 16px;
// `;

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const enteredQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(Math.max(1, enteredQuantity));
  };

  const handleConfirm = () => {
    //링크로 장바구니로 넘아가기 코딩하기
    alert(`선택된 수량: ${quantity}`);
  };

  return (
    <div>
      <QuantityInputContainer>
        <Label htmlFor="quantity">Quantity:</Label>
        <QuantityInput
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </QuantityInputContainer>
      <SubmitButton onClick={handleConfirm}>ADD</SubmitButton>
      {/* <ResultContainer>
        <p>선택된 수량: {quantity}</p>
      </ResultContainer> */}
    </div>
  );
};

export default QuantityPicker;
