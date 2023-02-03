import React from "react";
import './index.css';
import { FaTrash } from 'react-icons/fa';

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
     <FaTrash className='delete-from-cart' onClick={() => deleteFromCart(id)} />
   </li>
  )
}
