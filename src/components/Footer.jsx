import React from "react";
import { Link } from "react-router-dom";
import { socialMedia } from "../utils/socialMedia";
import { menus } from "../utils/menus";

const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-2 p-20 bg-black text-white mt-20 gap-4">
      <div className="flex flex-col w-full h-full justify-between col-span-2 lg:col-span-1 gap-4">
        <div className="text-2xl font-bold">BEELEAF.</div>
        <div>
          <span className="text-gray-400 font-bold text-lg">Our Location:</span>
          <br />
          Jl. Raya Ciputat Raya No.1, Ciputat, Tangerang Selatan, Banten
        </div>
        <div>
          <span className="text-gray-400 font-bold text-lg">24/7 Hotline:</span>
          <br />
          +62 812-1234-5678
        </div>
      </div>
      <div className="flex w-full flex-col lg:items-end justify-between gap-5 lg:gap-10 h-full col-span-2 lg:col-span-1">
        <div className="flex lg:justify-around gap-4 lg:gap-10">
          {menus.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="hover:text-blue-400 font-bold"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex lg:justify-around lg:gap-10 gap-4">
          {socialMedia.map(({ name, url, Icon }, index) => (
            <Link
              to={url}
              key={index}
              className="border-2 rounded-full p-2 hover:bg-blue-500 hover:text-black"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <div>Copyright © 2022 Beeleaf. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
