import { useContext, useEffect} from "react";




import { CartContext } from "../../context/cart/CartContext";


import Shop from "../../component/shop/Shop";
import EmptyShop from "../../component/shop/EmptyShop";







function Cart(){
    const {cart,getCart}=useContext(CartContext);
    

    
    useEffect(() => {
        getCart();
      }, []);

  
    return <>
        {cart.length > 0 ? <Shop  /> : <EmptyShop />}
    </>
}
export default Cart;