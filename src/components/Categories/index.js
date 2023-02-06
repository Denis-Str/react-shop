import React from 'react';
import Category from "./Category";
import './index.css'

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = this.props.categories.map(category =>
      <Category key={category} category={category} setCurrentCategory={this.props.setCurrentCategory} currentCategory={this.props.currentCategory} />);

    return (
      <ul className='categories'>{categories}</ul>
    )
  }
}
