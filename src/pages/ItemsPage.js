import { Link } from 'react-router-dom';
import { useState } from 'react';

const dummyData = [
  {
    id: 11,
    title: 'perfume Oil',
    description:
      'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: 'Impression of Acqua Di Gio',
    category: 'fragrances',
    thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/11/1.jpg',
      'https://i.dummyjson.com/data/products/11/2.jpg',
      'https://i.dummyjson.com/data/products/11/3.jpg',
      'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
    ],
  },
  {
    id: 12,
    title: 'Brown Perfume',
    description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: 'Royal_Mirage',
    category: 'fragrances',
    thumbnail: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/12/1.jpg',
      'https://i.dummyjson.com/data/products/12/2.jpg',
      'https://i.dummyjson.com/data/products/12/3.png',
      'https://i.dummyjson.com/data/products/12/4.jpg',
      'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
    ],
  },
  {
    id: 13,
    title: 'Fog Scent Xpressio Perfume',
    description:
      'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: 'Fog Scent Xpressio',
    category: 'fragrances',
    thumbnail: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
    images: [
      'https://i.dummyjson.com/data/products/13/1.jpg',
      'https://i.dummyjson.com/data/products/13/2.png',
      'https://i.dummyjson.com/data/products/13/3.jpg',
      'https://i.dummyjson.com/data/products/13/4.jpg',
      'https://i.dummyjson.com/data/products/13/thumbnail.webp',
    ],
  },
  {
    id: 14,
    title: 'Non-Alcoholic Concentrated Perfume Oil',
    description:
      'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: 'Al Munakh',
    category: 'fragrances',
    thumbnail: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/14/1.jpg',
      'https://i.dummyjson.com/data/products/14/2.jpg',
      'https://i.dummyjson.com/data/products/14/3.jpg',
      'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
    ],
  },
  {
    id: 15,
    title: 'Eau De Perfume Spray',
    description:
      'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: 'Lord - Al-Rehab',
    category: 'fragrances',
    thumbnail: 'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/15/1.jpg',
      'https://i.dummyjson.com/data/products/15/2.jpg',
      'https://i.dummyjson.com/data/products/15/3.jpg',
      'https://i.dummyjson.com/data/products/15/4.jpg',
      'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
    ],
  },
  {
    id: 16,
    title: 'Hyaluronic Acid Serum',
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: 'skincare',
    thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/16/1.png',
      'https://i.dummyjson.com/data/products/16/2.webp',
      'https://i.dummyjson.com/data/products/16/3.jpg',
      'https://i.dummyjson.com/data/products/16/4.jpg',
      'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
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
  {
    id: 25,
    title: 'Gulab Powder 50 Gram',
    description: 'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
    price: 70,
    discountPercentage: 13.58,
    rating: 4.87,
    stock: 47,
    brand: 'Dry Rose',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/25/1.png',
      'https://i.dummyjson.com/data/products/25/2.jpg',
      'https://i.dummyjson.com/data/products/25/3.png',
      'https://i.dummyjson.com/data/products/25/4.jpg',
      'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
    ],
  },
  {
    id: 26,
    title: 'Plant Hanger For Home',
    description:
      'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
    price: 41,
    discountPercentage: 17.86,
    rating: 4.08,
    stock: 131,
    brand: 'Boho Decor',
    category: 'home-decoration',
    thumbnail: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/26/1.jpg',
      'https://i.dummyjson.com/data/products/26/2.jpg',
      'https://i.dummyjson.com/data/products/26/3.jpg',
      'https://i.dummyjson.com/data/products/26/4.jpg',
      'https://i.dummyjson.com/data/products/26/5.jpg',
      'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
    ],
  },
  {
    id: 27,
    title: 'Flying Wooden Bird',
    description:
      'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
    price: 51,
    discountPercentage: 15.58,
    rating: 4.41,
    stock: 17,
    brand: 'Flying Wooden',
    category: 'home-decoration',
    thumbnail: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
    images: [
      'https://i.dummyjson.com/data/products/27/1.jpg',
      'https://i.dummyjson.com/data/products/27/2.jpg',
      'https://i.dummyjson.com/data/products/27/3.jpg',
      'https://i.dummyjson.com/data/products/27/4.jpg',
      'https://i.dummyjson.com/data/products/27/thumbnail.webp',
    ],
  },
  {
    id: 28,
    title: '3D Embellishment Art Lamp',
    description:
      '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',
    price: 20,
    discountPercentage: 16.49,
    rating: 4.82,
    stock: 54,
    brand: 'LED Lights',
    category: 'home-decoration',
    thumbnail: 'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/28/1.jpg',
      'https://i.dummyjson.com/data/products/28/2.jpg',
      'https://i.dummyjson.com/data/products/28/3.png',
      'https://i.dummyjson.com/data/products/28/4.jpg',
      'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
    ],
  },
  {
    id: 29,
    title: 'Handcraft Chinese style',
    description:
      'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
    price: 60,
    discountPercentage: 15.34,
    rating: 4.44,
    stock: 7,
    brand: 'luxury palace',
    category: 'home-decoration',
    thumbnail: 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
    images: [
      'https://i.dummyjson.com/data/products/29/1.jpg',
      'https://i.dummyjson.com/data/products/29/2.jpg',
      'https://i.dummyjson.com/data/products/29/3.webp',
      'https://i.dummyjson.com/data/products/29/4.webp',
      'https://i.dummyjson.com/data/products/29/thumbnail.webp',
    ],
  },
  {
    id: 30,
    title: 'Key Holder',
    description:
      'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
    price: 30,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: 'Golden',
    category: 'home-decoration',
    thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/30/1.jpg',
      'https://i.dummyjson.com/data/products/30/2.jpg',
      'https://i.dummyjson.com/data/products/30/3.jpg',
      'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
    ],
  },
];

export default function ItemsPage() {
  const [productList, setProductList] = useState(dummyData);
  return (
    <>
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
                    <Link to="/items/:itemId" className="listitems">
                      bags
                    </Link>
                  </li>
                  <li>
                    <Link to="/items/:itemId" className="listitems">
                      footwear
                    </Link>
                  </li>
                  <li>
                    <Link to="/items/:itemId" className="listitems">
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
