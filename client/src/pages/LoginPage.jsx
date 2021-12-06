import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userReducer";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      console.log(res.data);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="flex flex-col jusify-center items-center w-60">
      <div className="flex flex-col jusify-between items-center border py-5 w-full sm:py-10 px-7 sm:px-10 m-36 space-y-5 font-bold bg-gray-200 text-white">
        <h1 className="text-2xl">Login</h1>
        <form className="flex flex-col jusify-between items-center font-bold">
          <input
            className="border mb-5 w-48 pl-1 text-black"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border mb-5 w-48 pl-1 text-black"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border px-8 bg-green-300 font-bold my-6 text-white"
            onClick={handleClick}
            disabled={isFetching}
          >
            Login
          </button>
          <div className="flex flex-col jusify-between items-center space-y-3 text-xs mt-5">
            {error && (
              <h1 className="text-red-400">Username or password is wrong! </h1>
            )}

            <Link to="/register">Create a new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
