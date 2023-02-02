import React from "react";
import Product from "./Product";
import axios from "axios";

const baseURL = 'https://fakestoreapi.com';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const { data } = await axios.get(`${baseURL}/products`);
    this.setState({products: data })
  }

  render() {
    const listProducts = this.state.products.map(product => <Product key={product.id} product={product} />);
    return (
      <ul className='products'>{listProducts}</ul>
    )
  }
}
