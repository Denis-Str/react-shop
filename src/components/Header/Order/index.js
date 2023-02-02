import React from "react";

export default function Order({order: {title, image, price}}) {
  return (
   <li>
     <div className='title'>{title}</div>
     <picture>
       <img src={image} alt={title}/>
     </picture>
     <div className='inner'>
       <div className='price'>{price}$</div>
       {/*<div role='button' className='add-to-cart' onClick={() => addToCart(product)} />*/}
     </div>
   </li>
  )
}
