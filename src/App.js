import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./component/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="text-white min-h-screen bg-gradient-to-r from-red-950 to-red-700  py-[30px] 2xl:py-[70px] px-[5%]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
