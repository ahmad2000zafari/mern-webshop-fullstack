import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userReducer";
import { resetCart } from "../redux/cartReducer";

import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = ({ toggle }) => {
  const cartquantity = useSelector((state) => state.cart.cartItemsQuantity);
  const favoritesQuantity = useSelector(
    (state) => state.favorites.favoritesItemsQuantity
  );
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(logOut());
      dispatch(resetCart());
      history.push("/login");
    }
    if (!user) {
      history.push("/login");
    }
  };

  const registerHandler = (e) => {
    history.push("/register");
  };

  return (
    <div className="flex flex-row justify-between sm:justify-between items-center bg-black border-b h-20 w-full">
      <Link
        to="/"
        className="flex flex-row justify-center items-center h-full text-white font-bold sm:text-2xl pl-5 text-center"
      >
        Shop now
      </Link>

      <div className="flex flex-row justify-end  items-center h-full text-white space-x-6 lg:space-x-12 w-2/3 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-row justify-between lg:justify-start items-center h-full  text-white space-x-6 lg:space-x-12 invisible sm:visible">
          <button className="font-bold" onClick={registerHandler}>
            Sign up
          </button>
          <Link to="/login " className="font-bold" onClick={handleClick}>
            {user ? "logout" : "login"}
          </Link>
        </div>
        <div className="flex flex-row sm:justify-end items-center h-full text-white space-x-2 sm:space-x-6 lg:space-x-8 ">
          <Link to="/favorites" className="sm:pr-2">
            <Badge
              className="mr-3"
              badgeContent={favoritesQuantity}
              color="success"
            >
              <FavoriteBorderOutlined />
            </Badge>
          </Link>
          <Link to="/cart" className="sm:pr-2">
            <Badge
              className="mr-3 text-white"
              badgeContent={cartquantity}
              color="success"
            >
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          <div className="pr-4 cursor-pointer sm:hidden" onClick={toggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
