import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";

function CartProvider({children}){

    const [cart,setCart]=useState([]);
    const [check,setCheck]=useState(false);
    const getCart = async () => {
        try{
            const respons = await axios.get("http://localhost:5000/cart");
            setCart(respons?.data);
        }catch(error){
            console.error("Error fetching :", error);
        }
        
    };

    const checkedCart=(id)=>{
        const check=cart.find((item)=>item.id === +id);
        if(check){
            setCheck(true);
        }
        else{
            setCheck(false);
        }
    }
   

    useEffect(() => {
        getCart();
      }, []);

    return <CartContext.Provider value={{cart,setCart,checkedCart,setCheck,check}}>
        {children}
    </CartContext.Provider>
}
export default CartProvider;