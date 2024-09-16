import { Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";

import Home from "./page/Home";
import Product from "./page/Product/Product";

import Header from "./component/UI/Header";
import Footer from "./component/UI/Footer";
import Cart from "./page/Cart/Cart";

function App() {
  const scrol = useRef();

  return (
    <>
      <div ref={scrol}></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer scrol={scrol} />
    </>
  );
}

export default App;
