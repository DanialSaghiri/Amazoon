import { useEffect, useState } from "react";
import axios from "axios";

import { ProductsContext } from "./ProductsContext";

function ProductsProvider({ children }) {
  const [datas, setDatas] = useState([]);
  const [product, setProduct] = useState({});
 
  const getData = async () => {
    const respons = await axios.get("http://localhost:5000/products");
    setDatas(respons?.data);
  };
  const getProduct = async (id) => {
    const respons = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(respons.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        datas,
        getProduct,
        product,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
