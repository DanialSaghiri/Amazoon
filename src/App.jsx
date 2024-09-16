import { Route, Routes } from "react-router-dom";
import { useRef } from "react";



import Header from "./component/UI/Header";
import Footer from "./component/UI/Footer";


import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import Cart from "./page/Cart/Cart";

function App() {
  const scrol = useRef();

  return (
    <>
      <div ref={scrol} className=""></div>
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
