import React from "react";
import './index.css'
import Product from "./Product";

export default function Products({products, addToCart}) {
  const listProducts = products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />);
  return (
    <ul className='products'>{listProducts}</ul>
  )
}
