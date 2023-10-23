import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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

const QuantityPicker = (item) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const enteredQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(Math.max(1, enteredQuantity));
  };

  // const handleCart = () => {
  //   alert(`선택된 수량: ${quantity}`);
  // };

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
      <Link to={`/cart/?itemId=${item.itemValue}&itemQuantity=${quantity}`}>
        <SubmitButton>ADD</SubmitButton>
      </Link>
    </div>
  );
};

export default QuantityPicker;
