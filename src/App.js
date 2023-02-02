import React  from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default class App extends React.Component{
  render() {
    return (
      <div className="wrap">
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </div>
    );
  }
}
