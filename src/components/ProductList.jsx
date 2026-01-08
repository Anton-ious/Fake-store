import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import "../pages/ProductList.css";
import { Helmet } from "react-helmet";
import { ProductContext } from "../context/ProductContext";

export default function ProductList() {
  const {
    products,
    categories,
    selectedCategory,
    getproductBycategories,
    getProducts,
  } = useContext(ProductContext);
  return (
    <>
      <Helmet>
        <title>Products Page</title>
        <meta name="description" content="Browse our product collection" />
      </Helmet>
      <div className="intro ">
        <h2 className="hero-title">{selectedCategory}</h2>
      </div>
      <h3 className="text-center">Categories</h3>
      <div className="categories d-flex flex-wrap justify-content-center my-4">
        <button className="btn btn-outline-primary m-2" onClick={getProducts}>
          All products
        </button>
        {categories.map((category) => (
          <button
            className="btn btn-outline-primary m-2"
            key={category}
            onClick={() => getproductBycategories(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div className="products-list container-fluid mt-5">
        <div className="row g-4">
          {products.length === 0 && (
            <div className="col-12 text-center display-4 py-5">
              Loading products…
            </div>
          )}
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
