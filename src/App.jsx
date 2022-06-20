import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ProductPage from "./views/ProductPage";
import CategoryPage from "./views/CategoryPage";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Page404 from "./views/Page404";
import Cart from "./views/Cart";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
