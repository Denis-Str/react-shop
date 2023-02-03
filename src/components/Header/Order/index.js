import React from "react";
import './index.css';

export default function Order({order, deleteFromCart}) {
  const {title, image, price, id} = order;
  return (
   <li className='order-item'>
     <picture>
       <img src={image} alt={title}/>
     </picture>
     <div className='inner'>
       <div className='title'>{title}</div>
       <div className='price'>{price}$</div>
     </div>
     <div role='button' className='delete-from-cart' onClick={() => deleteFromCart(id)} />
   </li>
  )
}
