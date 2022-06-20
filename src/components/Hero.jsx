import React from "react";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen w-full relative bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-80 select-none">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-5">
            Welcome to Beeleaf.id
          </h1>
          <p className="text-center">
            Beeleaf.id is a platform for sharing your knowledge and experience
            with others.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="bg-gray-800 hover:bg-blue-500 text-white font-bold py-3 px-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
