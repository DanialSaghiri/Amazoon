import { useState } from "react";

import imgScore from "../../assets/images/score.avif"

import styles from "./InformationProduct.module.css";

function InformationProduct({product}){


    const [dropDown, setDropDown] = useState("");

    const [seeMore, setSeeMore] = useState(false);
  
    const [aboutMore, setAboutMore] = useState(false);
    const [styleProduct, setStyleProduct] = useState(false);



    const dropHandler = () => {
        dropDown === "detailsBordOn"
          ? setDropDown("")
          : setDropDown("detailsBordOn");
      };
      const btnHandler1 = () => {
        styleProduct ? setStyleProduct(false) : null;
      };
      const btnHandler2 = () => {
        !styleProduct ? setStyleProduct(true) : null;
      };
      const seeMoreHandler = () => {
        setSeeMore(!seeMore);
      };
      const aboutMoreHandler = () => {
        setAboutMore(!aboutMore);
      };

    return <section className={styles.allInformation}>
    <h2>{product.name}</h2>
    <p>{product.Description}</p>
    <a href="#">Visit the acer Store</a>
    <div className={styles.score}>
      <div className={styles.rate}>
        <span>{product.score}</span>
        <img src={imgScore} alt="score" />
        <img src={imgScore} alt="score" />
        <img src={imgScore} alt="score" />
        <img src={imgScore} alt="score" />
        <img src={imgScore} alt="score" />
      </div>
      <div className={styles.scoreBord}>
        <div className={styles.rate}>
          <img src={imgScore} alt="score" />
          <img src={imgScore} alt="score" />
          <img src={imgScore} alt="score" />
          <img src={imgScore} alt="score" />
          <img src={imgScore} alt="score" />
          <h3>{product.score} out of 5</h3>
        </div>
        <p>1,770 global ratings</p>
        <div className={styles.infoRange}>
          <a href="">4 star</a>
          <div className={styles.range1}>
            <div></div>
          </div>
          <a href="">65%</a>
        </div>
        <div className={styles.infoRange}>
          <a href="">3 star</a>
          <div className={styles.range2}>
            <div></div>
          </div>
          <a href="">20%</a>
        </div>
        <div className={styles.infoRange}>
          <a href="">2 star</a>
          <div className={styles.range3}>
            <div></div>
          </div>
          <a href="">15%</a>
        </div>
      </div>
      <a href="">1,752 ratings</a>
      <a href="">Search this page</a>
    </div>
    <div className={styles.price}>
      <h3>
        <span>-7%</span> {product.DiscountedPrice}
      </h3>
      <div>
        List Price: <p>{product.price}</p>{" "}
      </div>
    </div>
    <div className={styles.details}>
      <p>$91.31 Shipping & Import Fees Deposit to Iran</p>
      <div onClick={dropHandler}>
        <span>Details</span>
        <i className="bx bx-chevron-down"></i>
      </div>
      <div className={`${styles.detailsBord} ${dropDown} `}>
        <h4>Shipping & Fee Details</h4>
        <div className={styles.priceInfo}>
          <div>
            <h5>Price</h5>
            <span>$299.99</span>
          </div>
          <div>
            <h5>$64.32</h5>
            <span>$64.32</span>
          </div>
          <div>
            <h5>Estimated Import Fees Deposit</h5>
            <span>$64.32</span>
          </div>
        </div>
        <div className={styles.totalPrice}>
          <h5>Total</h5>
          <span>$391.30</span>
        </div>
      </div>
    </div>
    <p>
      Available at a lower price from other sellers that may not offer free
      Prime shipping.
    </p>
    <div className={styles.extraSavings}>
      <button>Extra Savings</button>
      <p>Amazon Music offer with this purchase 1 Applicable Promotion</p>
      <i className="bx bx-chevron-down"></i>
      <div className={styles.bordShop}>
        Amazon Music offer with this purchase Shop items
      </div>
    </div>
    <p>
      Style: {styleProduct ? <span>R7 5700U</span> : <span>R3 7320U</span>}{" "}
    </p>
    <div className={styles.ModelProduct}>
      <button
        onClick={btnHandler1}
        className={!styleProduct ? `${styles.btnModelProduct}` : ""}
      >
        R3 7320U
        <p>299.99</p>
      </button>
      <button
        onClick={btnHandler2}
        className={styleProduct ? `${styles.btnModelProduct}` : ""}
      >
        R7 5700U
        <p>499.99</p>
      </button>
    </div>
    <div className={styles.informationProduct}>
      <div>
        <h5>Brand</h5>
        <p>acer</p>
      </div>
      <div>
        <h5>Model Name</h5>
        <p>Laptop</p>
      </div>
      <div>
        <h5>Screen Size</h5>
        <p>15.6 Inches</p>
      </div>
      <div>
        <h5>Color</h5>
        <p>Silver</p>
      </div>
      <div>
        <h5>Hard Disk Size</h5>
        <p>128 GB</p>
      </div>
      <div>
        <h5>CPU Model </h5>
        <p>Ryzen 3</p>
      </div>
      <div>
        <h5>Ram Memory Installed Size</h5>
        <p>8 GB</p>
      </div>
      {!seeMore && (
        <p>
          <i className="bx bx-chevron-down"></i>
          <span onClick={seeMoreHandler}>see more</span>
        </p>
      )}
      {seeMore && (
        <>
          <div>
            <h5>Operating System</h5>
            <p>Windows 11</p>
          </div>
          <div>
            <h5>Special Feature</h5>
            <p>Backlit Keyboard</p>
          </div>
          <div>
            <h5>Graphics Card Description</h5>
            <p>Integrated</p>
          </div>
          <p>
            <i className="bx bx-chevron-up"></i>
            <span onClick={seeMoreHandler}>show less</span>
          </p>
        </>
      )}
    </div>
    <ul className={styles.aboutProduct}>
      <li>
        Purposeful Design: Travel with ease and look great doing it with the
        Aspire's 3 thin, light design.
      </li>
      <li>
        Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest
        AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for the
        entire family, with performance and productivity at the core.
      </li>
      <li>
        Visibly Stunning: Experience sharp details and crisp colors on the
        15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.
      </li>
      <li>
        Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
        solid-state drive storage to store your files and media
      </li>
      <li>
        The HD front-facing camera uses Acer’s TNR (Temporal Noise
        Reduction) technology for high-quality imagery in low-light
        conditions. Acer PurifiedVoice technology with AI Noise Reduction
        filters out any extra sound for clear communication over online
        meetings.
      </li>
      <li>
        Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless
        signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.
      </li>
      <li>
        Improved Thermals: With a 78% increase in fan surface area, enjoy an
        improved thermal system and an additional 17% thermal capacity.
        Allowing for longer, more efficient work sessions while not plugged
        in.
      </li>
      {!aboutMore && (
        <p>
          <i className="bx bx-chevron-down"></i>
          <span onClick={aboutMoreHandler}>see more</span>
        </p>
      )}
      {aboutMore && (
        <>
          <li>
            Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2 Gen
            2 (up to 10 Gbps) DisplayPort over USB Type-C & USB Charging, 2
            - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP support, 1 -
            Headphone/Speaker/Line-Out Jack, DC-in for AC adapter
          </li>
          <li>
            What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord
          </li>
          <li>Keyboard backlight not present on this model</li>
          <p>
            <i className="bx bx-chevron-up"></i>
            <span onClick={aboutMoreHandler}>show less</span>
          </p>
        </>
      )}
    </ul>
    <div className={styles.note}>
      <div>
        <i className="bx bx-chat"></i>
        <p>Report an issue with this product or seller</p>
      </div>
      <div>
        <h5>
          Note:{" "}
          <span>
            Products with electrical plugs are designed for use in the US.
            Outlets and voltage differ internationally and this product may
            require an adapter or converter for use in your destination.
            Please check compatibility before purchasing.
          </span>
        </h5>
      </div>
    </div>
  </section>
}
export default InformationProduct;