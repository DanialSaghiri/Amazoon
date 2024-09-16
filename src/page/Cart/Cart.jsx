import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";



import { CartContext } from "../../context/cart/CartContext";

import styles from "./Cart.module.css"
import Shop from "../../component/shop/Shop";







function Cart(){
    const {cart,getCart}=useContext(CartContext);
    

    
    useEffect(() => {
        getCart();
      }, []);

  
    return <>
        {cart.length > 0 ? <Shop  /> : 
        <div className={styles.empty}>
            <div >
            <h1>Your Amazon Basket is empty.</h1>
            <p>Check products page for shopping. <Link to={"/"}>continue shopping</Link></p>
            </div>  
        </div>}
    </>
}
export default Cart;