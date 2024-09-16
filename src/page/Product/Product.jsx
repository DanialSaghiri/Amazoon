import { useParams } from "react-router-dom";

import { useContext, useEffect } from "react";


import Buy from "../../component/product/Buy";
import InformationProduct from "../../component/product/InformationProduct";
import ImgInfoProduct from "../../component/product/ImgInfoProduct";


import { ProductsContext } from "../../context/Products/ProductsContext";
import { CartContext } from "../../context/cart/CartContext";


import styles from "./Product.module.css";





function Product() {
  const {getProduct,product}=useContext(ProductsContext);
  const { id } = useParams();


  useEffect(() => {
    getProduct(id);
  }, []);
 

  return (
    <div className={styles.product}>
        <ImgInfoProduct id={id} product={product}/>
        <InformationProduct product={product} />
        <Buy id={id} product={product}/>
    </div>
  );
}
export default Product;
