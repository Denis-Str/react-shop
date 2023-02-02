import React from "react";
import './index.css';

export default function Header() {
  return (
    <header>
      <div className='top'>
        <span className='logo'>House staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className='presentation'></div>
    </header>
  )
}
