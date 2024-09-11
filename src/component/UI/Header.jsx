import {  useState } from "react";

import image from "../../assets/images/logoAmazoon.avif";
import image2 from "../../assets/images/logoFlag.avif";
import image3 from "../../assets/images/shop.avif";
import image4 from "../../assets/images/logoMenu.avif";
import image5 from "../../assets/images/logoUser.avif";

function Header() {
  const [activeMenu, setActiveMenu] = useState("notActive");
  const [page, setPage] = useState(false);
  

  const menuHandler = () => {
    activeMenu === "active"
      ? setActiveMenu("notActive")
      : setActiveMenu("active");
  };

  return (
    <header>
      
      <section className="upNav">
        <img src={image} alt="Amazoon" />
        <div className="deliver">
          <i className="bx bx-location-plus"></i>
          <p>
            Deliver to <span>iran</span>
          </p>
        </div>
        <div className="search">
          <select className="dropDown">
            <option>All</option>
            <option>mobiles</option>
            <option>laptopos</option>
            <option>mobile accessories</option>
          </select>
          <input type="search" placeholder="Search Amazoon" />
          <i className="bx bx-search-alt-2"></i>
        </div>
        <div className="infoLanguage">
          <div className="language">
            <img src={image2} alt="" />
            <span>EN</span>
            <i className="bx bxs-down-arrow"></i>
          </div>
          <div className="info">
            <div className="linkChange">
              <span>change language</span>
              <a href="#">learn more</a>
            </div>
            <div className="changeLanguageSelect">
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
            <div className="linkChange">
              <span>change countery</span>
              <a href="#">learn more</a>
            </div>
            <div className="linkChange border">
              <span>$ - USD - US Dollar</span>
              <a href="#">change</a>
            </div>
            <div className="Shoping">
              <img src={image2} alt="" />
              <h4>you are shopping on Amazon.com</h4>
            </div>
            <a href="#">change countery/region</a>
          </div>
        </div>
        <div className="signIn">
          <div className="signInText">
            <p>Hello, sign in</p>
            <h5>
              Account & Lists
              <i className="bx bxs-down-arrow"></i>
            </h5>
          </div>
          <div className="infoSignIn">
            <button className="btnSignIn">Sign in</button>
            <div className="linkChange">
              <span>New customer? </span>
              <a href="#">Start here.</a>
            </div>
            <div className="accountList">
              <div className="list">
                <h3>Your Lists</h3>
                <a href="#">Create a List</a>
                <a href="#">Find a List</a>
              </div>
              <div className="account">
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
        <div className="shop">
          <div className="imgShop">
            <span>0</span>
            <img src={image3} alt="" />
          </div>
          <h3>Cart</h3>
        </div>
      </section>
      <section className="downNav">
        <div className="menu">
          <div className="menuBurger" onClick={menuHandler}>
            <img src={image4} alt="" />
            <span>All</span>
          </div>
          <span>Today's Deals </span>
          <span>Customer</span>
          <span>Service</span>
          <span>Registry</span>
          <span>Gift Cards Sell</span>
        </div>
        <div className={activeMenu} onClick={menuHandler}>
          <div className="user">
            <img src={image5} alt="" />
            <h2>Hello, sign in</h2>
          </div>

          {!page ? (
            <>
              <div className="devices">
                <h2>Digital Content & Devices</h2>
                <span onClick={() => setPage(!page)}>
                  Amazon Music
                  <i className="bx bx-chevron-right"></i>
                </span>
                <span>
                  Kindle E -readers & Books
                  <i className="bx bx-chevron-right"></i>
                </span>
                <span>
                  Amazon Appstore
                  <i className="bx bx-chevron-right"></i>
                </span>
              </div>
              <div className="department">
                <h2>Shop by Department</h2>
                <span>
                  Electronics
                  <i className="bx bx-chevron-right"></i>
                </span>
                <span>
                  Computer
                  <i className="bx bx-chevron-right"></i>
                </span>
                <span>
                  Smart Home
                  <i className="bx bx-chevron-right"></i>
                </span>
                <span>
                  Arts & Crafts
                  <i className="bx bx-chevron-right"></i>
                </span>
                <span>
                  See all
                  <i className="bx bx-chevron-right"></i>
                </span>
              </div>
            </>
          ) : (
            <div>
              <span onClick={(c) => setPage(!c)}>
                Main Menu
                <i className="bx bx-chevron-right"></i>
              </span>
              <div className="music">
                <h2>Stream Music</h2>
                <span>Amazon Music Unlimited</span>
                <span> Free Streaming Music</span>
                <span>Podcasts</span>
                <span> Open Web Player</span>
                <span>Download the app</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </header>
  );
}
export default Header;
