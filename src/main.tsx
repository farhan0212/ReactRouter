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
import Image from "./assets/components/Image.tsx";
import NotFound from "./assets/page/NotFound.tsx";
import ProductSearch from "./assets/components/ProductSearch.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images/*" element={<Image />} />
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="sellers" element={<Seller />} />
          <Route path="customers" element={<Customer />} />
          <Route path="products/search" element={<ProductSearch />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
