import React, { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [qty, setQty] = useState(1);
  const [prod_cart, setProductCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("added")) || [];
    } catch {
      return [];
    }
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All products");

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setSelectedCategory("All products");
  };

  const getcategories = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    setCategories(res.data);
  };

  const getproductBycategories = async (category) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(res.data);
    setSelectedCategory(category);
  };

  useEffect(() => {
    getcategories();
    getProducts();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("added", JSON.stringify(prod_cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage:", e);
    }
  }, [prod_cart]);

  let cart_length = prod_cart.length;

  return (
    <ProductContext.Provider
      value={{
        cart_length,
        qty,
        setQty,
        prod_cart,
        setProductCart,
        products,
        categories,
        selectedCategory,
        getproductBycategories,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
