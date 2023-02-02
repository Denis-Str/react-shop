import React  from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import axios from "axios";

const baseURL = 'https://fakestoreapi.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      orders: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get(`${baseURL}/products`);
    this.setState({products: data })
  }

  addToCart(product) {
    this.setState({orders: [...this.state.orders, product]});
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        <main>
          <Products products={this.state.products} addToCart={this.addToCart} />
        </main>
        <Footer />
      </div>
    );
  }
}
