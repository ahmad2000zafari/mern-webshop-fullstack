import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesReducer";

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Product = ({ item, favoritesIcon }) => {
  const productsInCart = useSelector((state) => state.cart.cart);
  const productsInFavorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const found = productsInCart.find((p) => p.product._id === item._id);

    if (!found) {
      dispatch(addToCart(item));
    }
  };

  const addFavoriteHandler = (item) => {
    const found = productsInFavorites.find((p) => p.product._id === item._id);

    if (!found) {
      dispatch(addToFavorites(item));
    }
  };

  const removeFavoritesHandler = () => {
    dispatch(removeFromFavorites(item));
  };
  return (
    <div
      className="flex flex-col justify-center lg:justify-between items-center w-64 h-44 sm:w-96 sm:h-60 "
      key={item}
    >
      <div className="flex flex-col justify-center lg:justify-between items-center border-black shadow-lg  w-full h-full  sm:w-full sm:h-full md:w-11/12 md:h-11/12 lg:w-10/12 lg:h-10/12 bg-gray-200 relative transform hover:scale-110 transition duration-700 ease-in-out">
        <img
          className="h-full w-full object-cover"
          src={item.img}
          alt={item.title}
        />
        <div
          className="flex flex-row justify-start items-start w-full pb-1 px-3 absolute top-0 ml-3 mt-3 space-x-1 "
          key={item._id}
        >
          {favoritesIcon ? (
            <div className=" flex flex-col justify-center items-center border rounded h-6 w-8 transition duration-500 ease-in-out hover:bg-green-300 transform hover:-translate-y-1 hover:scale-110   ">
              <button onClick={() => addFavoriteHandler(item)} key={item._id}>
                <FavoriteBorderOutlined
                  sx={{ fontSize: 23 }}
                  color="white"
                  className="cursor-pointer h-14 w-14 rounded-full text-white z-20 "
                />
              </button>
            </div>
          ) : (
            <button
              className="h-6 w-8 font-bold border rounded bg-red-200 opacity-40 transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
              onClick={removeFavoritesHandler}
            >
              -
            </button>
          )}
          <div className=" flex flex-col justify-center items-center border h-6 w-8 rounded z-0 transition duration-500 ease-in-out  hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 ">
            <Link to={`/product/${item._id}`}>
              <SearchOutlined
                sx={{ fontSize: 23 }}
                color="white"
                className="cursor-pointer text-white z-20"
              />
            </Link>
          </div>
          <div
            className=" flex flex-col justify-center items-center border rounded h-6 w-8 z-0 transition duration-500 ease-in-out  hover:bg-purple-300 transform hover:-translate-y-1 hover:scale-110 "
            onClick={handleAddToCart}
          >
            <ShoppingCartOutlined
              sx={{ fontSize: 24 }}
              color="white"
              className="cursor-pointer text-white z-20 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
