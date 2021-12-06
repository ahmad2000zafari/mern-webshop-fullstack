import React from "react";

const SendMessage = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full  py-10 font-bold text-gray-700 mt-10 mb-14 text-sm sm:text-base  ">
      <h1>Do you want new design ideas?</h1>
      <h1>Sign up for new trends!</h1>
      <div className="flex flex-row justify-center items-center space-x-0 border mt-8">
        <input
          className="w-48 sm:w-96 pl-2 text-sm"
          placeholder="whrite your email address"
        ></input>
        <button className="px-2 sm:px-5 transform hover:scale-110 bg-green-400 text-white font-bold text-sm sm:text-lg">
          send
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
