import { Route, Routes } from "react-router-dom";
import { useRef } from "react";


import Header from "./component/UI/Header";
import Footer from "./component/UI/Footer";
import Home from "../page/Home";

function App() {
  
  const scrol = useRef();

  return (
    <>
      <div ref={scrol}></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer scrol={scrol}/>
    </>
  );
}

export default App;
