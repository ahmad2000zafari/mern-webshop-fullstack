import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const favoritesIcon = false;
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl font-bold my-10">your favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center relative z-10 gap-7 md:gap-4 lg:gap-7">
        {favorites.map((item) => (
          <Product
            item={item.product}
            key={item.product._id}
            favoritesIcon={favoritesIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
