import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-row justify-center items-center space-x-12 text-center items-center bg-gray-200 w-full text-white font-bold text-lg"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 font-semibold" to="/register">
        Sign up
      </Link>
      <Link className="p-4 font-semibold" to="/login">
        login
      </Link>
    </div>
  );
};

export default Dropdown;
