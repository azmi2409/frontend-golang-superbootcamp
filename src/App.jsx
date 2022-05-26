import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./components/heading";

const App = () => {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
