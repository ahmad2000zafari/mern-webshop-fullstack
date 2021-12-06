import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { resetCart } from "../redux/cartReducer";

const SuccessPage = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/orders", {
          userId: currentUser._id,
          products: cart.cart.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };

    data && createOrder();
    dispatch(resetCart());
  }, [cart, data, currentUser, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-60 text-center">
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared.`}
      <Link
        className="border px-5 bg-green-400 text-white font-bold mt-10"
        to="/"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default SuccessPage;
