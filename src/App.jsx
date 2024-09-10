import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image from "./assets/images/logoAmazoon.avif";
import image2 from "./assets/images/logoFlag.avif";
import image3 from "./assets/images/image (5).avif"
// const getData = async () => {
//   const respons = await axios("http://localhost:5000/data");
//   console.log(respons);
// };
// getData();

function App() {
  return (
    <>
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
                  <input type="checkbox" />
                  Englisg-EN
                </div>
                <div>
                  <input type="checkbox" />
                  Englisg-EN
                </div>
                <div>
                  <input type="checkbox" />
                  Englisg-EN
                </div>
                <div>
                  <input type="checkbox" />
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
        <section></section>
      </header>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide><SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide><SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide><SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default App;
