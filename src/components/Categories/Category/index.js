import React from "react";
import './index.css'

export default function Category({category, setCurrentCategory, currentCategory}) {
  const isActive = currentCategory === category ? '_active' : '';
  return (
    <li className={`category ${isActive}`} onClick={() => setCurrentCategory(category)}>{category}</li>
  )
}
