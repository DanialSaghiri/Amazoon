import { useState } from "react";

import logoMenu from "../../assets/images/logoMenu.avif";
import logoUser from "../../assets/images/logoUser.avif";

import styles from "./Menu.module.css";

function Menu({activeMenu,setActiveMenu,setNotActiveMenu}){

    const [page, setPage] = useState(false);
    

    const menuHandler = () => {
        setActiveMenu("active");
        setNotActiveMenu("black")
        
      };



    return <section className={styles.menuAll}>
    <div className={styles.menu}>
      <div className={styles.menuBurger} onClick={menuHandler}>
        <img src={logoMenu} alt="" />
        <span>All</span>
      </div>
      <span>Today's Deals </span>
      <span>Customer</span>
      <span>Service</span>
      <span>Registry</span>
      <span>Gift Cards Sell</span>
    </div>
    <div className={activeMenu} onClick={menuHandler}>
      <div className={styles.user}>
        <img src={logoUser} alt="" />
        <h2>Hello, sign in</h2>
      </div>

      {!page ? (
        <>
          <div className={styles.devices}>
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
          <div className={styles.department}>
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
          <div className={styles.music}>
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
}
export default Menu;