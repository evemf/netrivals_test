import React from 'react';
import '../../App.css';
import Products from './Products.js';

export default function Home() {
  return (
    <>
      <div style={{ maxWidth: '900px' }}>
        <Products />
      </div>
    </>
  );
}
