import React, {useState} from "react";
import Order from "./Order";
import './index.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header({orders}) {
  let [cartOpen, setCartOpen] = useState(false);
  const isActive = cartOpen ? 'active' : '';
  const showOrder = () => orders.map(order => <ul><Order key={order.id} order={order} /></ul>)
  const showIsEmpty = () => <div>Товары не выбраны</div>;

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
          {cartOpen && (
            orders.length > 0 ? showOrder() : showIsEmpty()
          )}
        </div>
      </div>
      <div className='presentation' />
    </header>
  )
}
