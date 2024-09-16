import Select from "react-select";

import styles from "./Buy.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart/CartContext";




const options = [
  { value: 1, label: "Quantity: 1" },
  { value: 2, label: "Quantity: 2" },
  { value: 3, label: "Quantity: 3" },
  { value: 4, label: "Quantity: 4" },
  { value: 5, label: "Quantity: 5" },
  { value: 6, label: "Quantity: 6" },
];





function Buy({id,product}) {
    const {check,setCheck,valueSelect,setValueSelect,priceCart,setPriceCart,addHandler,updateHandler,removeHandler,checkedCart}=useContext(CartContext);

    const [addBtn, setAddBtn] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);
  const [removeBtn, setRemoveBtn] = useState(false);
  const [selecteOption, setSelecteOption] = useState(1);
  

  useEffect(()=>{
    checkedCart(id);
  },[])


  const selectHandler = (value) => {
    setSelecteOption(value);
    check ? setAddBtn(false):null;
    setCheck(false);
    setUpdateBtn(true);
  };
  const addCartHandler = () => {
    addHandler(product,selecteOption);
    setValueSelect(selecteOption);
    setAddBtn(false);
    setRemoveBtn(true);
    setUpdateBtn(false);
    setPriceCart(product.DiscountedPrice*selecteOption+priceCart);
   
  };
  const removeCartHandler=async()=>{
    removeHandler(id);
    setAddBtn(true);
    setPriceCart(priceCart-product.DiscountedPrice*valueSelect);
    setCheck(false);
   
  }
  const updateCartHandler = async() => {
    updateHandler(id,selecteOption)
    setValueSelect(selecteOption);
    setCheck(true);
    setAddBtn(false);
    setUpdateBtn(false);
    setPriceCart(priceCart-(product.DiscountedPrice*(valueSelect))+(product.DiscountedPrice*selecteOption));

  };




    return  <section className={styles.buy}>
    <p>Buy new:</p>
    <h2>{priceCart!==0 ?`$${priceCart}` : `$${product.DiscountedPrice}`}</h2>
    <p>$91.31 Shipping & Import Fees Deposit to Iran Details Delivery</p>
    <h3>Wednesday, May 15</h3>
    <div className={styles.deliver}>
      <i className="bx bx-location-plus"></i>
      <p>
        Deliver to <span>iran</span>
      </p>
    </div>
    <h4>In Stock</h4>
    <Select
      defaultValue={options[0]}
      onChange={(e) => selectHandler(e.value)}
      options={options}
    />
    {check ? <button className={styles.btnCart} onClick={removeCartHandler}>Remove from cart</button> :  addBtn ? <button className={styles.btnCart} onClick={addCartHandler}>Add to cart</button>
       : removeBtn && !updateBtn  ? <button className={styles.btnCart} onClick={removeCartHandler}>Remove from cart</button> 
       : <button className={styles.btnCart} onClick={updateCartHandler}>Update</button> }
    
  </section>
}
export default Buy;
