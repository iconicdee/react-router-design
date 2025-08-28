import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const SharedLayoutProduct = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    if (result && result.length > 0) setProducts(result);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
        <h2>Products</h2>
      <Outlet context={{ products }} />
    </div>
  );
};

export default SharedLayoutProduct;
