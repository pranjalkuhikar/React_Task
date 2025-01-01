import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductDataContext from "./context/ProductDataContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductDataContext>
        <App />
      </ProductDataContext>
    </BrowserRouter>
  </StrictMode>
);
