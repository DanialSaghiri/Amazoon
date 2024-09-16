import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";





function CartProvider({children}){

  


    const [cart,setCart]=useState([]);
    const [check,setCheck]=useState(false);
    const [priceCart,setPriceCart]=useState(0);
    const [valueSelect,setValueSelect]=useState(1);
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


    const addHandler= async(product,number)=>{
        const cartItem = cart.find((item) => item.id === product.id);
    if(cartItem){
      const updateCart={
        ...cartItem,
        quantity: number
      }
      try {
        const response = await axios.put(
          `http://localhost:5000/cart/${cartItem.id}`,
          updateCart
        );
        setCart(
          cart.map((item) =>
            item.id === cartItem.id ? response.data : item
          )
        );
      } catch (error) {
        console.error("Error updating :", error);
      }
    }
    else{
      const newCart={
        ...product,
        quantity : number
      }
      try {
        const response = await axios.post(
          "http://localhost:5000/cart",
          newCart
        );
        setCart([...cart, response.data]);
      } catch (error) {
        console.error("Error adding :", error);
      }
    }
    }



    const removeHandler=async (id)=>{
        try {
            await axios.delete(`http://localhost:5000/cart/${id}`);
            setCart(cart.filter((item) => item.id !== +id));
          } catch (error) {
            console.error("Error removing :", error);
          }
    }



    const updateHandler=async (id,number)=>{
        const cartItem = cart.find((item) => item.id === +id);
    if (cartItem) {
      const updateCart = {
        ...cartItem,
        quantity: number
      };

      try {
        const response = await axios.put(
          `http://localhost:5000/cart/${id}`,
          updateCart
        );
        setCart(
          cart.map((item) => (item.id === id ? response.data : item))
        );
      } catch (error) {
        console.error("Error updating :", error);
      }
    }
    }





    const deleteAllHandler=async ()=>{
      try {
        await Promise.all(
          cart.map((item) =>
            axios.delete(`http://localhost:5000/cart/${item.id}`)
          )
        );
  
        setCart([]);
      } catch (error) {
        console.error("Error clearing:", error);
      }
    }
   

    useEffect(() => {
        getCart();
      }, []);

    return <CartContext.Provider value={{cart,priceCart,valueSelect,check,setValueSelect,setPriceCart,checkedCart,getCart,setCheck,updateHandler,deleteAllHandler,removeHandler,addHandler}}>
        {children}
    </CartContext.Provider>
}
export default CartProvider;