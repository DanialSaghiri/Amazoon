import { useState } from "react";
import { Link } from "react-router-dom";






import logoAmazoon from "../../assets/images/logoAmazoon.avif";
import logoFlag from "../../assets/images/logoFlag.avif";
import shop from "../../assets/images/shop.avif";

import styles from "./Nav.module.css";

function Nav({cart,setNotActiveMenu}){
    const [displayOn1,setDisplayOn1]=useState("");
  const [displayOn2,setDisplayOn2]=useState("");

    const closeDrop=()=>{
        setNotActiveMenu("");
        setDisplayOn1("");
        setDisplayOn2("");
    }


    const dropOn1Handler=()=>{
        setNotActiveMenu("black");
        setDisplayOn1("displayOn");
      }
      const dropOn2Handler=()=>{
        setNotActiveMenu("black");
        setDisplayOn2("displayOn");
      }


    let countQuantity=0;
    return <section className={styles.nav}>
    <Link to={"/"}>
      <img src={logoAmazoon} alt="Amazoon" />
    </Link>
    <div className={styles.deliver}>
      <i className="bx bx-location-plus"></i>
      <p>
        Deliver to <span>iran</span>
      </p>
    </div>
    <div className={styles.search}>
      <select className={styles.dropDown}>
        <option>All</option>
        <option>mobiles</option>
        <option>laptopos</option>
        <option>mobile accessories</option>
      </select>
      <input type="search"  placeholder="Search Amazoon" />
      <i className="bx bx-search-alt-2"></i>
    </div>
    <div className={styles.infoLanguage} onPointerEnter={dropOn1Handler} >
      <div className={styles.language}>
        <img src={logoFlag} alt="" />
        <span>EN</span>
        <i className="bx bxs-down-arrow"></i>
      </div>
      <div className={`${styles.info} ${displayOn1}`} onMouseLeave={closeDrop}>
        <div className={styles.linkChange}>
          <span>change language</span>
          <a href="#">learn more</a>
        </div>
        <div className={styles.changeLanguageSelect}>
          <div>
            <input type="radio" name="radio" />
            Englisg-EN
          </div>
          <div>
            <input type="radio" name="radio" />
            Englisg-EN
          </div>
          <div>
            <input type="radio" name="radio" />
            Englisg-EN
          </div>
          <div>
            <input type="radio" name="radio" />
            Englisg-EN
          </div>
        </div>
        <div className={styles.linkChange}>
          <span>change countery</span>
          <a href="#">learn more</a>
        </div>
        <div className={`${styles.linkChange} ${styles.border}`}>
          <span>$ - USD - US Dollar</span>
          <a href="#">change</a>
        </div>
        <div className={styles.Shoping}>
          <img src={logoFlag} alt="" />
          <h4>you are shopping on Amazon.com</h4>
        </div>
        <a href="#">change countery/region</a>
      </div>
    </div>
    <div className={styles.signIn}  onPointerEnter={dropOn2Handler}>
      <div className={styles.signInText} >
        <p>Hello, sign in</p>
        <h5>
          Account & Lists
          <i className="bx bxs-down-arrow"></i>
        </h5>
      </div>
      <div className={`${styles.infoSignIn} ${displayOn2}`} onMouseLeave={closeDrop}>
        <button className={styles.btnSignIn}>Sign in</button>
        <div className={styles.linkChange}>
          <span>New customer? </span>
          <a href="#">Start here.</a>
        </div>
        <div className={styles.accountList}>
          <div className={styles.list}>
            <h3>Your Lists</h3>
            <a href="#">Create a List</a>
            <a href="#">Find a List</a>
          </div>
          <div className={styles.account}>
            <h3>Your Account</h3>
            <a href="#">Account</a>
            <a href="#">orders</a>
            <a href="#">Recommendations</a>
            <a href="#">Browsing</a>
            <a href="#">History</a>
          </div>
        </div>
      </div>
    </div>
    <p>Returns & Orders</p>
    <Link to={"/cart"}  className={styles.shop}>
      <div className={styles.imgShop} >
        <span>{cart.map((item)=>{
          countQuantity=item.quantity+countQuantity;
        })} {countQuantity}</span>
        <img src={shop} alt="" />
      </div>
      <h3>Cart</h3>
    </Link>
  </section>
}
export default Nav;