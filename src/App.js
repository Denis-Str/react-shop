import React  from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import axios from "axios";
import Categories from "./components/Categories";

const baseURL = 'https://fakestoreapi.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProducts: [],
      orders: [],
      categories: [],
      currentCategory: 'all'
    }

    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get(`${baseURL}/products`);
    const categories = new Set(data.map(({category}) => category));
    this.setState({products: data })
    this.setState({currentProducts: data })
    this.setState({categories: ['all', ...categories] })
  }

  addToCart(product) {
    this.setState({orders: [...this.state.orders, product]});
  }

  deleteFromCart(orderID) {
    this.setState({orders: this.state.orders.filter(({id}) => id !== orderID)})
  }

  setCurrentCategory(key) {
    this.setState({currentCategory: key })
    const filteredProducts = this.state.products.filter(({category}) => category === key);
    if (key === 'all') this.setState({currentProducts: this.state.products })
    else this.setState({currentProducts: filteredProducts })
  }

  render() {
    return (
      <div className="wrap">
        <Header orders={this.state.orders} deleteFromCart={this.deleteFromCart} />
        <main>
          <Categories categories={this.state.categories} setCurrentCategory={this.setCurrentCategory} currentCategory={this.state.currentCategory} />
          <Products products={this.state.currentProducts} addToCart={this.addToCart} />
        </main>
        <Footer />
      </div>
    );
  }
}
