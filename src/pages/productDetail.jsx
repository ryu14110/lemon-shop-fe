import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData } from '../sampleDB/sampleData';

export default function ProductDetail() {
  const { id } = useParams();
  const product = dummyData.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log('ProductDetail');
  return (
    <div>
      <img src={product.images[1]} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
  );
}
