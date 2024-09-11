import { useEffect, useReducer, useRef, useState } from "react";
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
import image3 from "./assets/images/shop.avif";
import image4 from "./assets/images/logoMenu.avif";
import image5 from "./assets/images/logoUser.avif";
import image6 from "./assets/images/slider1.avif";
import image7 from "./assets/images/slider2.avif";
import image8 from "./assets/images/slider3.avif";
import image9 from "./assets/images/slider4.avif";
import imgScore from "./assets/images/score.avif";

function App() {
  const [activeMenu, setActiveMenu] = useState("notActive");
  const [page, setPage] = useState(false);
  const [datas, setDatas] = useState([]);
  const menuHandler = () => {
    activeMenu === "active"
      ? setActiveMenu("notActive")
      : setActiveMenu("active");
  };

  const scrol = useRef();

  const scrollHandler = () => {
    scrol.current.scrollIntoView({ behavior: "smooth" });
  };

  const getData = async () => {
    const respons = await axios("http://localhost:5000/products");
    setDatas(respons?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <div ref={scrol}></div>
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
      <main className="container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          className="slider"
          navigation
        >
          <SwiperSlide>
            <img src={image6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image9} alt="" />
          </SwiperSlide>
        </Swiper>
        <ul className="products">
          {datas.map((data) => {
            return (
              <li className="product" key={data.id}>
                <img src={data.img} alt={data.name} />
                <h2>{data.name}</h2>
                <h4>{data.DiscountedPrice}</h4>
                <h5>{data.price}</h5>
                <p>{data.Description}</p>
                <div>
                  <div>
                    <img src={imgScore} alt="score" />
                    <img src={imgScore} alt="score" />
                    <img src={imgScore} alt="score" />
                    <img src={imgScore} alt="score" />
                    <img src={imgScore} alt="score" />
                  </div>
                  <span>{data.score}</span>
                </div>
                <button>see more ...</button>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <button onClick={scrollHandler}>Back to top</button>
        <section>
          <div></div>
          <div></div>
        </section>
      </footer>
    </>
  );
}

export default App;
