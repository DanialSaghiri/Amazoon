import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/Products/ProductsProvider.jsx";

createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <ProductsProvider>
        <App />
    </ProductsProvider>
  </BrowserRouter>
);
