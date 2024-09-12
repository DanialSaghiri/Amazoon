import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Product.module.css";
import product1 from "../../assets/images/product1.avif";
import product2 from "../../assets/images/product2.avif";
import product3 from "../../assets/images/product3.avif";
import product4 from "../../assets/images/product4.avif";
import imgScore from "../../assets/images/score.avif";

const imgs = {
  product1,
  product2,
  product3,
  product4,
};

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [dropDown, setDropDown] = useState("");
  const getProduct = async () => {
    const respons = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(respons.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const dropHandler = () => {
    dropDown === "detailsBordOn"
      ? setDropDown("")
      : setDropDown("detailsBordOn");
  };

  return (
    <div className={styles.product}>
      <section>
        <img src={imgs[`product${id}`]} alt={product.name} />
      </section>
      <section>
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
        <p></p>
        <div>
          <button></button>
          <button></button>
        </div>
        <div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <button>see more</button>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
          <div>
            <h5></h5>
            <p></p>
          </div>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <button>see more</button>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          {/* <img src="" alt="" /> */}
          <p></p>
        </div>
        <div>
          <h5>Note: </h5>
          <span></span>
        </div>
      </section>
      <section></section>
    </div>
  );
}
export default Product;
