import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our Home Page" />
      </Helmet>
      <div className="intro">
        <h1>Quality Meets Style</h1>
        <p className="lead">
          Discover our curated collection of premium electronics, jewelry, and
          fashion. Shop Now
        </p>
        <Link
          to="/products"
          className="btn btn-outline-primary px-4 mt-4"
        >
          See all products
        </Link>
      </div>

      {/*  */}

      <h2 className="produce">What we produce</h2>

      <div className="produce_a d-flex flex-wrap gap-3 justify-content-center mt-5 mb-5">
        <div className="produce_t">
          <h3>Men`s clothes</h3>
          <hr />
          <p>
            A wide range of men`s clothing including casual wear, formal
            attire, and accessories to suit every style and occasion.
          </p>
          <hr />
          <button className="btn btn-outline-primary" onClick={() => prod()}>
            See product
          </button>
        </div>
        <div className="produce_t">
          <h3>Women`s clothes</h3>
          <hr />
          <p>
            Explore our collection of women`s clothing, from trendy outfits to
            timeless classics, designed to make you look and feel your best.
          </p>
          <hr />
          <Link to="/products" className="btn btn-outline-primary">
            See product
          </Link>
        </div>
        <div className="produce_t">
          <h3>Accessories </h3>
          <hr />
          <p>
            Complete your look with our stylish accessories, including bags,
            jewelry, hats, and more, perfect for adding a personal touch to any
            outfit.
          </p>
          <hr />
          <Link to="/products" className="btn btn-outline-primary">
            See product
          </Link>
        </div>
      </div>
    </>
  );
}
