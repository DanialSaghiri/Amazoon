import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/Products/ProductsProvider.jsx";
import CartProvider from "./context/cart/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
);
