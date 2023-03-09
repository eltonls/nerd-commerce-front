import React from "react";
import Header from "../components/header/Header";
import ProductList from "../components/products/ProductList";

const ProductsPage = () => {
  return (
    <section className="section-products">
      <Header />
      <ProductList />
    </section>
  );
};

export default ProductsPage;
