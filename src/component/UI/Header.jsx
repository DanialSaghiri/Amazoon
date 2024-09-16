import {  useContext, useEffect, useState } from "react";


import { CartContext } from "../../context/cart/CartContext";



import Nav from "./Nav";
import Menu from "./Menu";



function Header() {
 
  const {cart,getCart}=useContext(CartContext);
  const [activeMenu, setActiveMenu] = useState("notActive");

  const [notActiveMenu,setNotActiveMenu]=useState("");
  

  useEffect(()=>{
    getCart();
  },[])

  
 
  const closeMenu=()=>{
    setActiveMenu("notActive");
    setNotActiveMenu("");
  }
 
  return (
    <header>
      <div className={notActiveMenu} onClick={closeMenu} ></div>
      <Nav cart={cart} setNotActiveMenu={setNotActiveMenu}/>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} setNotActiveMenu={setNotActiveMenu} />
    </header>
  );
}
export default Header;
