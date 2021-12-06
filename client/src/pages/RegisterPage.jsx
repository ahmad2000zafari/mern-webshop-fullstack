import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      history.push("/login");
    } catch (err) {}
  };

  return (
    <div className="flex flex-col jusify-between items-center w-60 ">
      <div className="flex flex-col jusify-between items-center border w-full p-10 m-36 space-y-5 font-bold bg-gray-200">
        <h1 className="text-2xl text-white">Register</h1>
        <form className="flex flex-col jusify-between items-center font-bold">
          <input
            className="border mb-5 w-48 pl-1"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border mb-5 w-48 pl-1"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border mb-5 w-48 pl-1"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border px-8 bg-green-300 font-bold my-6 text-white"
            onClick={handleClick}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
