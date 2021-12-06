import React, { useState } from "react";
import { useLocation } from "react-router";
import Products from "../components/Products";

const ProductSPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <h1 className="text-4xl font-bold my-10">{cat}</h1>
      <div className="flex flex-row justify-center items-center w-full px-6 my-6 space-x-20 sm:space-x-40">
        <select name="color" className="border" onChange={handleFilters}>
          <option label="color" value=""></option>
          <option>white</option>
          <option>black</option>
          <option>red</option>
          <option>blue</option>
          <option>yellow</option>
          <option>green</option>
          <option>pink</option>
          <option>grey</option>
        </select>
        <select name="size" className="border" onChange={handleFilters}>
          <option label="size" value=""></option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </div>
      <Products cat={cat} filters={filters} />
    </div>
  );
};

export default ProductSPage;
