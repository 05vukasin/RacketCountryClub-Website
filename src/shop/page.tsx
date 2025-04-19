import React from "react";
import ProductList from "./components/ProductList";
import "./ShopPage.css";

const ShopPage = () => {
  return (
    <div className="ShopPage">
      <div className="shop-container">
        <h1 className="shop-title">Prodavnica</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default ShopPage;
