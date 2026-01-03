import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, title, price, description,id }) {
  function locate(id) {
    window.location.href = `/products/${id}`;
  }
  return (
    <article className="product-card card h-100">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <div className="mt-3 d-flex gap-2 align-items-center">
          <h5 className="card-price mb-0">${price}</h5>
          <button
            className="btn btn-primary ms-auto"
            aria-label={`Add ${title} to cart`}
            onClick={() => locate(id)}
          >
            See details
          </button>
        </div>
      </div>
    </article>
  );
}
