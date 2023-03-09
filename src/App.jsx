import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProductList />
      </div>
    </Router>
  );
}

export default App;
