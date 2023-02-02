import React from "react";
import './index.css';

export default class Product extends React.Component {
  render() {
    const { title, image, description, price } = this.props.product;
    return(
      <li className='product'>
        <h2 className='title'>{title}</h2>
        <picture>
          <img src={image} alt={title}/>
        </picture>
        <p className='desc'>{description}</p>
        <div className='inner'>
          <div className='price'>{price}$</div>
          <div role='button' className='add-to-cart' onClick={() => this.props.addToCart(this.props.product)} />
        </div>
      </li>
    )
  }
}
