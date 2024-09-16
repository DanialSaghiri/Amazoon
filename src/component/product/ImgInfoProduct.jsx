

import product1 from "../../assets/images/product1.avif";
import product2 from "../../assets/images/product2.avif";
import product3 from "../../assets/images/product3.avif";
import product4 from "../../assets/images/product4.avif";
import product5 from "../../assets/images/product5.avif";
import product6 from "../../assets/images/product6.avif";



const imgs = {
    product1,
    product2,
    product3,
    product4,
    product5,
    product6
  };
function ImgInfoProduct({id , product}){
    return <section>
    <img src={imgs[`product${id}`]} alt={product.name} />
  </section>
}

export default ImgInfoProduct;