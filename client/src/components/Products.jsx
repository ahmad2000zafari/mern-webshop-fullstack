import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const favoritesIcon = true;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    console.log(filteredProducts);
  }, [products, cat, filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center relative z-10 gap-7 md:gap-4 lg:gap-7">
      {cat
        ? filteredProducts.map((item) => (
            <Product item={item} key={item._id} favoritesIcon={favoritesIcon} />
          ))
        : products.map((item) => (
            <Product item={item} key={item._id} favoritesIcon={favoritesIcon} />
          ))}
    </div>
  );
};

export default Products;
