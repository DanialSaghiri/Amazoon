import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductsContext } from "../../context/Products/ProductsContext";

import imgScore from "../../assets/images/score.avif"

function Products() {
  const datas =useContext(ProductsContext);
  return (
    <ul className="products">
      {datas.map((data) => {
        return (
          <Link  to={`/product/${data.id}`} className="product" key={data.id}>
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
          </Link>
        );
      })}
    </ul>
  );
}
export default Products;
