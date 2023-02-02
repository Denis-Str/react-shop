import React, {useState} from "react";
import './index.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  const isActive = cartOpen ? 'active' : '';

  return (
    <header>
      <div className='top'>
        <span className='logo'>House staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <div>
          <FaShoppingCart className={`cart-button ${isActive}`} onClick={() => setCartOpen(cartOpen = !cartOpen)} />
          {cartOpen && (<div className='shop-cart'></div>)}
        </div>
      </div>
      <div className='presentation'></div>
    </header>
  )
}
