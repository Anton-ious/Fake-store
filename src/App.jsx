import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";
import { Offline, Online } from "react-detect-offline";
import ProductDetails from "./components/ProductDetails";
import CartProducts from "./components/CartProducts";

function App() {
  const location = useLocation();

  return (
    <>
      <Online>
        <Navbar />
        <div className="page-wrapper">
          <div key={location.pathname} className="page-transition">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Products" element={<ProductList />} />
              <Route path="/Products/:id" element={<ProductDetails />} />
              <Route path="/CartProducts" element={<CartProducts />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Online>
      <Offline>
        <div className="offline-message d-flex justify-content-center align-items-center vh-100">
          <div className="alert alert-danger text-center p-4">
            You are offline. Please check your internet connection.
          </div>
        </div>
      </Offline>
    </>
  );
}

export default App;
