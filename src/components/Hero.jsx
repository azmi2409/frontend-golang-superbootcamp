import React from "react";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen w-full relative bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-80">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-5">
            Welcome to Beeleaf.id
          </h1>
          <p className="text-center">
            Beeleaf.id is a platform for sharing your knowledge and experience
            with others.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
