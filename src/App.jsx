import React from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DUMMY_LIST = [
  {
    key: 1,
    price: 59.99,
    name: "Blusão Tom e Jerry",
    brand: "Nerd Universe"
  },
  {
    key: 2,
    price: 120.5,
    name: "Action Figure Beastars",
    brand: "Nerd Universe"
  },
  {
    key: 3,
    price: 80.99,
    name: "Bermuda Naruto",
    brand: "Nerd Universe"
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProductList products={DUMMY_LIST} />
      </div>
    </Router>
  );
}

export default App;
