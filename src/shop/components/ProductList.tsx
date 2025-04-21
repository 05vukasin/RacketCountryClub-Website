import React, { useEffect, useState } from "react";
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://racketcountryclubbackend-1081514700612.us-central1.run.app/api/Product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Greška prilikom dohvata proizvoda:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Učitavanje proizvoda...</p>;

  return (
    <div className="ProductList">
      {products.map((product) => (
        <div key={product.id} className="ProductCard">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price} </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
