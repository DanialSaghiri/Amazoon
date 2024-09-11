import Products from "../src/component/home/Products";
import Slider from "../src/component/home/Slider";


function Home() {
  return (
    <div className="container">
      <Slider />
      <Products />
    </div>
  );
}
export default Home;
