import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "./data";

const Categories = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-5 z-0">
      <div className="flex flex-col justify-center items-center w-full px-2 py-5 bg-gray-200 opacity-60 relative z-10 shadow-lg">
        <h1 className="text-center sm:text-lg lg:text-xl absolute z-50 text-white font-bold">
          Find your desired!
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full ">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
