import React from "react";

export default class Product extends React.Component {
  render() {
    const { title, image, description, price } = this.props.product;
    return(
      <li className='product'>
        <h2>{title}</h2>
        <img src={image} alt={title}/>
        <p>{description}</p>
        <div>{price}$</div>
        <div role='button' className='add-to-cart'>+</div>
      </li>
    )
  }
}
