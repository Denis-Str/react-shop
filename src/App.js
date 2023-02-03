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
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get(`${baseURL}/products`);
    this.setState({products: data })
  }

  addToCart(product) {
    const notInCard = !(this.state.orders.find(({id}) => id === product.id))
    if (notInCard) this.setState({orders: [...this.state.orders, product]});
  }
  deleteFromCart(id) {
    console.log(id)
  }

  render() {
    return (
      <div className="wrap">
        <Header orders={this.state.orders} deleteFromCart={this.deleteFromCart}/>
        <main>
          <Products products={this.state.products} addToCart={this.addToCart}/>
        </main>
        <Footer />
      </div>
    );
  }
}
