import React from 'react';
import '../../App.css';
import ProductsList from '../ProductsList.js';
import Product from '../Product.js';
import '../Products.css';

export default function Products(props) {
  let totalProducts = ProductsList.length;

  return (
    <>
      <p>Apply price formula to my products</p>
      <p>Showing {totalProducts} of &nbsp;{totalProducts}&nbsp;products</p>
      <ul className="products">
      {ProductsList.map((product, index) => {
          return (
            <li key={index}>
              <Product product={product} />    
            </li>    
          );
        })}
      </ul>
    </>
    );
}
