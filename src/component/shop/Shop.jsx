import { useContext, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";


import imgPrime from "../../assets/images/prime.avif"
import { CartContext } from "../../context/cart/CartContext";

import styles from "../../page/Cart/Cart.module.css"

const options = [
    { value: 1, label: "Quantity: 1" },
    { value: 2, label: "Quantity: 2" },
    { value: 3, label: "Quantity: 3" },
    { value: 4, label: "Quantity: 4" },
    { value: 5, label: "Quantity: 5" },
    { value: 6, label: "Quantity: 6" },
  ];

function Shop(){
    const {cart,updateHandler,removeHandler,deleteAllHandler}=useContext(CartContext);
    const [newQuantity,setNewQuantity]=useState(0);
    const [changeBtn,setChangeBtn]=useState(false);

    const selectCartHandler=(value)=>{  
        setNewQuantity(value);
        setChangeBtn(true);
    }
    const updateCart=(id)=>{
        updateHandler(id,newQuantity);
        setChangeBtn(false);
    }

    let  allQuantity=0,allPrice=0;
    return <div className={styles.showCart}>
    <ul className={styles.carts}>
        <div>
            <h2>Shopping Basket</h2>
            <span onClick={()=>deleteAllHandler()}>Deselect all items</span>
        </div>
        {cart.map((item)=>{
           allQuantity=allQuantity+item.quantity;
           allPrice=(item.quantity*item.DiscountedPrice) + allPrice;
            return <li className={styles.cart} key={item.id}>
                
                <div className={styles.detailCart}>
                    <img src={item.img} alt="" />
                    <section className={styles.infoCart}>
                        <p>{item.Description}</p>
                        <h3>In Stock</h3>
                        <img src={imgPrime} alt="" />
                        <div>
                            <input type="checkbox" />
                            <span>This will be a gift <Link to={"/cart"}>Learn more</Link> </span>
                        </div>
                        <div>
                            <h4>Style Name: </h4>
                            <span>0.5 litre work container</span>
                        </div>
                        <div>
                            <h4>Colour name: </h4>
                            <span> white</span>
                        </div>
                        <div >
                            <Select
                                defaultValue={options[item.quantity-1]}
                                onChange={(e) => selectCartHandler(e.value)}
                                options={options}
                            />
                            <div className={styles.options}>
                                {changeBtn ? <span onClick={()=>updateCart(item.id)} >Update</span> : 
                                <span onClick={()=>removeHandler(item.id)}>Delete</span>}
                                <span>Save for later</span>
                                <span>See more like this</span>
                                <span>Share</span>
                            </div>
                        </div>
                        
                    </section>
                    <h3>{`$ ${item.DiscountedPrice}`}</h3>
                </div>
            </li>
        })}
        <h2>{`Subtotal (${allQuantity} item): $${allPrice}`}</h2>
    </ul>
    <div className={styles.proceed}>
        <p>{`Subtotal (${allQuantity} item):`}</p>
        <h3>{`$${allPrice}`}</h3>
        <div>
            <input type="checkbox" />
            <span>This will be a gift Learn more</span>
        </div>
        <button className={styles.btnCart}>Proceed to Checkout</button>
    </div>
</div>
}
export default Shop;