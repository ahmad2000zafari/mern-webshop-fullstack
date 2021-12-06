import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { addToFavorites } from "../redux/favoritesReducer";

import { FavoriteBorderOutlined } from "@mui/icons-material";

const ProductPage = () => {
  const productsInCart = useSelector((state) => state.cart.cart);
  const productsInFavorites = useSelector((state) => state.favorites.favorites);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
        console.log(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    const found = productsInCart.find(
      (item) => item.product._id === product._id
    );

    if (!found) {
      dispatch(addToCart(product));
    }
  };

  const handleAddToFavorites = () => {
    const found = productsInFavorites.find(
      (p) => p.product._id === product._id
    );

    if (!found) {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-14">
      <div clas="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold ">{product.title}</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-14 w-full">
        <div className="flex w-72 h-44 sm:w-96 sm:h-72">
          <img
            className="flex object-cover w-full h-full"
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col justify-between items-center space-y-6 w-72 sm:w-96 h-72 border py-3">
          <div>
            <h1 className="text-2xl">${product.price}</h1>
          </div>
          <div className="flex flex-col justify-start items-start mr-4">
            <h1>{product.desc}</h1>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1>Color in the stock</h1>
            <div className="flex flex-row space-x-3 text-sm">
              {product.color?.map((c) => (
                <div
                  className={`flex flex-row px-2 border text-white`}
                  style={{
                    backgroundColor: c,
                  }}
                  key={c}
                >
                  <h1
                    style={{
                      color: c === "white" ? "black" : "white",
                    }}
                  >
                    {c}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1>Size in the stock.</h1>
            <div className="flex flex-row space-x-3">
              {product.size?.map((s) => (
                <div className={`flex flex-row px-4 font-bold`} key={s}>
                  <h1>{s}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <button
          className="border px-5 py-2 bg-blue-500 text-white font-bold border text-sm sm:text-xl"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <button
          className="border px-5 py-2 text-white font-bold border text-sm sm:text-xl bg-green-500"
          onClick={handleAddToFavorites}
        >
          <FavoriteBorderOutlined
            sx={{ fontSize: 23 }}
            color="white"
            className="cursor-pointer h-14 w-14 rounded-full text-white z-20 "
          />
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
