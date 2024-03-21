import React from 'react';
import Product from './Product';
// import Carousel from './Carousle';
const ProductPage: React.FC = () => {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710853109_2525163.jpg?format=webp&w=300&dpr=2.0',
      price: 20,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1688721396_1165502.jpg?format=webp&w=300&dpr=2.0',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1697773221_1371149.jpg?format=webp&w=300&dpr=2.0',
      price: 39.99,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description for product 4',
        imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710853447_3317650.jpg?format=webp&w=300&dpr=2.0',
        price: 39.99,
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Description for product 5',
        imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710852581_2949362.jpg?format=webp&w=300&dpr=2.0',
        price: 39.99,
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'Description for product 6',
        imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710852766_6220051.jpg?format=webp&w=300&dpr=2.0',
        price: 39.99,
      },
      {
        id: 7,
        name: 'Product 7',
        description: 'Description for product 7',
        imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710850231_4941071.jpg?format=webp&w=300&dpr=2.0',
        price: 39.99,
      },
      {
        id: 8,
        name: 'Product 8',
        description: 'Description for product 8',
        imageUrl: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710517908_5650177.jpg?format=webp&w=300&dpr=2.0',
        price: 39.99,
      },
 
  ];

  return (<>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <Product
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-gradient-to-b from-blue-700 to-blue-600  text-white text-bolder py-2 px-4 rounded">
                Add to Cart
              </button>
              <button className="bg-gradient-to-b from-red-700 to-red-600  text-white py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductPage;