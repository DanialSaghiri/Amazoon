import { Route, Routes } from "react-router-dom";
import { useRef } from "react";

import Home from "./page/Home";
import Product from "./page/Product/Product";

import Header from "./component/UI/Header";
import Footer from "./component/UI/Footer";

function App() {
  
  const scrol = useRef();

  return (
    <>
      <div ref={scrol}></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Footer scrol={scrol}/>
    </>
  );
}

export default App;
