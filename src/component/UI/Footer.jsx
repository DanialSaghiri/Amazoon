import picturErth from "../../assets/images/picturErth.avif";
import logoAmazoon from "../../assets/images/logoAmazoon.avif";
import logoFlag from "../../assets/images/logoFlag.avif";


function Footer({scrol}) {
  const scrollHandler = () => {
    scrol.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <button onClick={scrollHandler}>Back to top</button>
      <section className="footer">
        <div className="about">
          <div className="aboutUs">
            <h3>Get to Know Us</h3>
            <span>Careers</span>
            <span>Blog</span>
            <span>About Amazon</span>
            <span>Investor Relations</span>
          </div>
          <div className="aboutUs">
            <h3>Make Money with Us</h3>
            <span>Sell products on Amazon</span>
            <span>Sell on Amazon Business</span>
            <span>Sell apps on Amazon</span>
            <span>Become an Affiliate</span>
          </div>
          <div className="aboutUs">
            <h3>Amazon Payment Products</h3>
            <span>Amazon Business Card</span>
            <span>Shop with Points</span>
            <span>Reload Your Balance</span>
            <span>Amazon Currency Converter</span>
          </div>
          <div className="aboutUs">
            <h3>Let Us Help You</h3>
            <span>Amazon and COVID-19</span>
            <span>Your Account</span>
            <span>Your Orders</span>
            <span>Shipping Rates & Policies</span>
          </div>
        </div>
        <div className="informatin">
          <img src={logoAmazoon} alt="Amazoon" />
          <div>
            <img src={picturErth} />
            <p>English</p>
          </div>
          <p>$ USD - U.s Dollor</p>
          <div>
            <img src={logoFlag} />
            <p>United States</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
