import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./components/heading";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Top from "./components/Top";
import ProductPage from "./views/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Heading />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>
      <Top />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
