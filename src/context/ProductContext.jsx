import React, { createContext, useEffect } from 'react'
import axios from "axios";
import { useState } from "react";

export const ProductContext = createContext();
export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All products");

  const getProducts= async ()=> {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setSelectedCategory("All products");
    }

    const getcategories= async () => {
      const res = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(res.data);
    }

    const getproductBycategories= async (category) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(res.data);
    setSelectedCategory(category);
    }
    
  useEffect(() => {
    getcategories();
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products, categories, selectedCategory, getproductBycategories, getProducts}}>
      {children}
    </ProductContext.Provider>
  )
}
