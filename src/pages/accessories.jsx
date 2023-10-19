import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainBar from '../components/MainBar';

const dummyData = [
  {
    id: 6,
    title: 'MacBook Pro',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: 'Apple',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
    images: [
      'https://i.dummyjson.com/data/products/6/1.png',
      'https://i.dummyjson.com/data/products/6/2.jpg',
      'https://i.dummyjson.com/data/products/6/3.png',
      'https://i.dummyjson.com/data/products/6/4.jpg',
    ],
  },
  {
    id: 7,
    title: 'Samsung Galaxy Book',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: 'Samsung',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/7/1.jpg',
      'https://i.dummyjson.com/data/products/7/2.jpg',
      'https://i.dummyjson.com/data/products/7/3.jpg',
      'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    ],
  },
  {
    id: 8,
    title: 'Microsoft Surface Laptop 4',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: 'Microsoft Surface',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/8/1.jpg',
      'https://i.dummyjson.com/data/products/8/2.jpg',
      'https://i.dummyjson.com/data/products/8/3.jpg',
      'https://i.dummyjson.com/data/products/8/4.jpg',
      'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
    ],
  },
  {
    id: 9,
    title: 'Infinix INBOOK',
    description:
      'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: 'Infinix',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/9/1.jpg',
      'https://i.dummyjson.com/data/products/9/2.png',
      'https://i.dummyjson.com/data/products/9/3.png',
      'https://i.dummyjson.com/data/products/9/4.jpg',
      'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
    ],
  },
  {
    id: 17,
    title: 'Tree Oil 30ml',
    description:
      'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: 'Hemani Tea',
    category: 'skincare',
    thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/17/1.jpg',
      'https://i.dummyjson.com/data/products/17/2.jpg',
      'https://i.dummyjson.com/data/products/17/3.jpg',
      'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
    ],
  },
  {
    id: 18,
    title: 'Oil Free Moisturizer 100ml',
    description:
      'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: 'Dermive',
    category: 'skincare',
    thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/18/1.jpg',
      'https://i.dummyjson.com/data/products/18/2.jpg',
      'https://i.dummyjson.com/data/products/18/3.jpg',
      'https://i.dummyjson.com/data/products/18/4.jpg',
      'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
    ],
  },
  {
    id: 19,
    title: 'Skin Beauty Serum.',
    description:
      'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
    price: 46,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
    brand: 'ROREC White Rice',
    category: 'skincare',
    thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/19/1.jpg',
      'https://i.dummyjson.com/data/products/19/2.jpg',
      'https://i.dummyjson.com/data/products/19/3.png',
      'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
    ],
  },
  {
    id: 20,
    title: 'Freckle Treatment Cream- 15gm',
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: 'Fair & Clear',
    category: 'skincare',
    thumbnail: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/20/1.jpg',
      'https://i.dummyjson.com/data/products/20/2.jpg',
      'https://i.dummyjson.com/data/products/20/3.jpg',
      'https://i.dummyjson.com/data/products/20/4.jpg',
      'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
    ],
  },
  {
    id: 21,
    title: '- Daal Masoor 500 grams',
    description: 'Fine quality Branded Product Keep in a cool and dry place',
    price: 20,
    discountPercentage: 4.81,
    rating: 4.44,
    stock: 133,
    brand: 'Saaf & Khaas',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
    images: [
      'https://i.dummyjson.com/data/products/21/1.png',
      'https://i.dummyjson.com/data/products/21/2.jpg',
      'https://i.dummyjson.com/data/products/21/3.jpg',
    ],
  },
  {
    id: 22,
    title: 'Elbow Macaroni - 400 gm',
    description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
    price: 14,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: 'Bake Parlor Big',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/22/1.jpg',
      'https://i.dummyjson.com/data/products/22/2.jpg',
      'https://i.dummyjson.com/data/products/22/3.jpg',
    ],
  },
  {
    id: 23,
    title: 'Orange Essence Food Flavou',
    description:
      'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
    price: 14,
    discountPercentage: 8.04,
    rating: 4.85,
    stock: 26,
    brand: 'Baking Food Items',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/23/1.jpg',
      'https://i.dummyjson.com/data/products/23/2.jpg',
      'https://i.dummyjson.com/data/products/23/3.jpg',
      'https://i.dummyjson.com/data/products/23/4.jpg',
      'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
    ],
  },
  {
    id: 24,
    title: 'cereals muesli fruit nuts',
    description:
      'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
    price: 46,
    discountPercentage: 16.8,
    rating: 4.94,
    stock: 113,
    brand: 'fauji',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/24/1.jpg',
      'https://i.dummyjson.com/data/products/24/2.jpg',
      'https://i.dummyjson.com/data/products/24/3.jpg',
      'https://i.dummyjson.com/data/products/24/4.jpg',
      'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
    ],
  },
];

export default function Accessories() {
  const [productList, setProductList] = useState(dummyData);
  return (
    <>
      <MainBar />
      <body>
        {productList && (
          <div className="products">
            <div className="categories">
              Catergory
              <nav>
                <ul className="orderlists">
                  <li>
                    <Link to="/" className="listitems">
                      shop all
                    </Link>
                  </li>
                  <li>
                    <Link to="/bags" className="listitems">
                      bags
                    </Link>
                  </li>
                  <li>
                    <Link to="/footwear" className="listitems">
                      footwear
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories" className="listitems">
                      accessories
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {productList.map((product) => {
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
