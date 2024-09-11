import { useEffect, useState } from "react";
import axios from "axios";

import { ProductsContext } from "./ProductsContext";

function ProductsProvider({ children }) {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const respons = await axios.get("http://localhost:5000/products");
    setDatas(respons?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductsContext.Provider value={datas}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
