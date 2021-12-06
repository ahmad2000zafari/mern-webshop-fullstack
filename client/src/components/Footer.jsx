import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-black py-11 w-full space-y-10">
      <div className="flex-1 flex flex-col justify-between items-center space-y-4 sm:space-y-7">
        <h1 className="text-2xl font-bold text-white"> web shop </h1>
        <div className="flex flex-row space-x-5 z-20">
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-white z-10 ">
            <Facebook color="primary" />
          </div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-white z-10 ">
            <Instagram color="secondary" />
          </div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-white z-10 ">
            <Twitter color="primary" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between items-center space-y-3 sm:space-y-5 text-lg sm:text-xl text-white font-bold">
        <h1>dream design</h1>
        <h1>perfect design</h1>
        <h1>real design</h1>
      </div>
      <div className="flex-1 flex flex-col justify-between items-center text-white space-y-3">
        <h2 className="text-lg font-bold">Contact</h2>
        <div className="flex flex-row justify-between items-center space-x-2 ">
          <Room sx={{ fontSize: 18 }} />
          <h1 className="text-sm font-semibold">Denmark Copenhagen ...</h1>
        </div>
        <div className="flex flex-row justify-between items-center space-x-2 ">
          <Phone sx={{ fontSize: 18 }} />
          <h1 className="text-sm font-semibold">4444444</h1>
        </div>
        <div className="flex flex-row justify-between items-center space-x-2 ">
          <MailOutlined sx={{ fontSize: 18 }} />
          <h1 className="text-sm font-semibold">ah2000za@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
