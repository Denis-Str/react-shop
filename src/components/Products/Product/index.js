import React from "react";
import './index.css';

export default function Product({product, addToCart}) {
  const { title, image, description, price } = product;

  return(
    <li className='product'>
      <h2 className='title'>{title}</h2>
      <picture>
        <img src={image} alt={title}/>
      </picture>
      <p className='desc'>{description}</p>
      <div className='inner'>
        <div className='price'>{price}$</div>
        <div role='button' className='add-to-cart' onClick={() => addToCart(product)} />
      </div>
    </li>
  )
}
