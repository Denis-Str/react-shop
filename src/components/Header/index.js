import React, {useState} from "react";
import Order from "./Order";
import './index.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header({orders, deleteFromCart}) {
  let [cartOpen, setCartOpen] = useState(false);
  const isActive = cartOpen ? 'active' : '';

  const order = orders.map(order => <Order key={order.id} order={order} deleteFromCart={deleteFromCart} />)
  const totalPrice = orders.reduce((acc, {price}) => { return acc + price; }, 0);
  const showOrder = () => (
    <div className='shop-cart'>
      <div className='total-price'>Общая стоимость: {totalPrice}$</div>
      <ul className='order-list'>{order}</ul>
    </div>
  )
  const showIsEmpty = () => <div className='shop-cart is-empty'>Товары не выбраны</div>;

  return (
    <header>
      <div className='top'>
        <span className='logo'>House staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <div className='order'>
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
