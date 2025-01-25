import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/page/Home.tsx";
import About from "./assets/page/About.tsx";
import Product from "./assets/components/Product.tsx";
import Seller from "./assets/components/Seller.tsx";
import Customer from "./assets/components/Customer.tsx";
import Data from "./assets/components/Data.tsx";
import DataLayout from "./assets/page/DataLayout.tsx";
import ProductDetail from "./assets/components/ProductDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="seller" element={<Seller />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
