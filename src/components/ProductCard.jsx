import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ProductContext } from "../context/ProductContext";
import "../pages/ProductCard.css";

export default function ProductCard({ image, title, price, description, id }) {
  const [already, setAlready] = useState(false);
  const { prod_cart, setProductCart } = useContext(ProductContext);

  function L_W_S(id) {
    if (id) {
      setProductCart((e) => (e.includes(id) ? e : [...e, id]));
      setAlready(true);
      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
        text: `${title} has been added.`,
        confirmButtonColor: "#0d6efd",
      });
    } else {
      setAlready(false);
    }
  }

  function locate(id) {
    window.location.href = `/products/${id}`;
  }
  return (
    <article className="product-card card h-100">
      <div className="card-media">
        <img className="card-img-top" src={image} alt={title} />
        <div className="price-badge">${Number(price).toFixed(2)}</div>
      </div>
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <div className="card-footer">
          <div className="actions d-flex gap-3 justify-content-center">
            <button
              className="btn btn-outline-primary btn-sm px-2"
              aria-label={`View details for ${title}`}
              onClick={() => locate(id)}
            >
              See details
            </button>
            <button
              className="btn btn-primary btn-sm px-2"
              aria-label={`Add ${title} to cart`}
              onClick={() => L_W_S(id)}
              disabled={already == true}
            >
              {already == true ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductCardDetails({ product }) {
  return (
    <>
      <div className="row g-4 align-items-start">
        <div className="col-md-5">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="text-muted mb-2">
            <span className="badge bg-secondary category-badge">
              {product.category}
            </span>
          </p>
          <div className="d-flex align-items-center my-3">
            <div className="price me-3">
              ${Number(product.price).toFixed(2)}
            </div>
            {product.rating?.rate && (
              <div className="rating text-muted">
                ⭐ {product.rating.rate} ({product.rating.count})
              </div>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="actions d-flex align-items-center gap-3 mt-4"></div>
        </div>
      </div>
    </>
  );
}

export function ProductCartDetails({ product }) {
  const { prod_cart, setProductCart } = useContext(ProductContext);
  function remove(id) {
    // use functional setter and avoid mutating prod_cart directly
    setProductCart((prev) => prev.filter((itemId) => itemId !== id));

    Swal.fire({
      icon: "success",
      title: "Removed from Cart",
      text: `${product.title} has been removed.`,
      confirmButtonColor: "#0d6efd",
    });
  }

  return (
    <>
      <div className="row g-4 align-items-start cart-row">
        <div className="col-md-5">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid cart-img"
            />
          </div>
        </div>
        <div className="col-md-6 product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="text-muted mb-2">
            <span className="badge bg-secondary category-badge">
              {product.category}
            </span>
          </p>
          <div className="d-flex align-items-center my-3">
            <div className="price me-3">
              ${Number(product.price).toFixed(2)}
            </div>
            {product.rating?.rate && (
              <div className="rating text-muted">
                ⭐ {product.rating.rate} ({product.rating.count})
              </div>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="actions d-flex align-items-center gap-3 mt-4">
            <button
              onClick={() => remove(product.id)}
              className="btn btn-outline-danger btn-md remove-btn"
              aria-label={`Remove ${product.title} from cart`}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
