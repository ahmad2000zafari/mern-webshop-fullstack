import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router";
import {
  removeFromCart,
  chooseSize,
  chooseColor,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../redux/cartReducer";

const KEY = process.env.REACT_APP_STRIPE_KEY;

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [stripetoken, setstripetoken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setstripetoken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripetoken.id,
            amount: cart.total,
          }
        );
        history.push("/success", {
          stripeData: res.data,
          cart: cart,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripetoken && makeRequest();
  }, [stripetoken, cart, history]);

  const quantityHandler = (product, type) => {
    if (type === "dec") {
      product.quantity > 1 &&
        dispatch(
          decreaseProductQuantity({
            ...product,
            quantity: product.quantity - 1,
          })
        );
    } else {
      dispatch(
        increaseProductQuantity({ ...product, quantity: product.quantity + 1 })
      );
    }
  };

  const removeHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl font-bold my-10">your cart</h1>

      <div className="flex flex-row justify-start items-center w-full">
        <div className="flex flex-col justify-start items-center sm:items-center w-full ml-2 space-y-2 sm:space-y-0">
          {cart.cart.map((item) => (
            <div
              className="flex flex-row justify-between items-center  border-t border-b space-x-5 md:space-x-10"
              key={item.product._id}
            >
              <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center space-x-5 sm:space-x-8">
                <div className="flex w-20 h-20">
                  <img
                    className="w-20 h-20 object-cover"
                    src={item.product.img}
                    alt={item.product.title}
                  />
                </div>
                <div className="flex flex-row justify-start items-center w-16">
                  <h1 className="">{item.product.title}</h1>
                </div>
                <div className="flex flex-col justify-start items-center w-10">
                  <span>${item.product.price}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center space-x-5 sm:space-x-7 h-32 sm:h-20">
                <div className="flex flex-row justify-center items-center font-bold text-sm space-x-2 lg:space-x-3  border w-20">
                  <h1
                    className="cursor-pointer"
                    onClick={() => quantityHandler(item.product, "dec")}
                  >
                    -
                  </h1>
                  <h1 className="px-3">{item.product.quantity}</h1>
                  <h1
                    className="cursor-pointer"
                    onClick={() => quantityHandler(item.product, "inc")}
                  >
                    +
                  </h1>
                </div>
                <select
                  required
                  className="border w-20"
                  onChange={(e) => {
                    dispatch(chooseSize(item.product, e.target.value));
                  }}
                >
                  <option label="size" value=""></option>
                  {item.product.size?.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>

                <select
                  required
                  className="border w-20"
                  onChange={(e) => {
                    dispatch(chooseColor(item.product, e.target.value));
                  }}
                >
                  <option label="color" value=""></option>
                  {item.product.color?.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button
                  className="text-white text-sm font-bold"
                  onClick={() => removeHandler(item.product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {cart.total === 0 ? (
        <div className="flex flex-col justify-between items-center space-y-5">
          <h1>your cart is empty!</h1>
          <Link to="/" className="bg-green-500 px-3 text-white font-bold">
            Shop Now
          </Link>
        </div>
      ) : (
        <StripeCheckout
          name=" test cart: 4242 4242 4242 4242"
          billingAddress
          shippingAddress
          amount={cart.total * 100}
          stripeKey={KEY}
          token={onToken}
        >
          <div className="flex flex-row space-x-2 border px-4 py-1 bg-blue-500 text-white font-bold my-16 cursor-pointer">
            <h1>pay</h1> <h1>${cart.total}</h1>
          </div>
        </StripeCheckout>
      )}
    </div>
  );
};

export default CartPage;
