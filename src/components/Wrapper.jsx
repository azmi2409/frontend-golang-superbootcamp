import React from "react";
import Header from "./Header";
import Heading from "./heading";
import Footer from "./Footer";
import Top from "./Top";
import { Toaster } from "react-hot-toast";

const Wrapper = ({ children }) => {
  return (
    <>
      <Heading />
      <Header />
      <main className="relative" id="wrapper">
        {children}
      </main>
      <Toaster position="bottom-center" />
      <Top />
      <Footer />
    </>
  );
};

export default Wrapper;
