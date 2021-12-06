import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className=" flex flex-col justify-between items-center w-60 sm:w-72 h-80 sm:h-96 my-6 z-20 mb-8 relative text-center   transform hover:text-3xl">
      <Link to={`/products/${item.cat}`} className="z-30">
        <img
          className="w-full h-full drop-shadow-2xl object-cover transform hover:scale-110 hover:text-3xl transition duration-700 ease-in-out z-50"
          src={item.img}
          alt={item.title}
        />

        <h1 className="flex flex-col justify-between items-center text-white text-2xl font-bold absolute top-1/2  w-full transform hover:scale-150 transition duration-700 ease-in-out">
          {item.title}
        </h1>
      </Link>
    </div>
  );
};

export default CategoryItem;
