import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./components/heading";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Top from "./components/Top";
import ProductPage from "./views/ProductPage";
import CategoryPage from "./views/CategoryPage";
import Login from "./views/Login";
import Logout from "./views/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Heading />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Top />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
