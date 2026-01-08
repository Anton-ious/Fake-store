import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import "../pages/CartProducts.css";
import { ProductCartDetails } from "./ProductCard";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function CartProducts() {
  const { prod_cart, setProductCart, cart_length } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      const requests = prod_cart.map((id) =>
        axios.get(`https://fakestoreapi.com/products/${id}`)
      );

      const responses = await Promise.all(requests);

      const fetchedProducts = responses.map((res) => res.data);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  const clear_cart = () => {
    // use the context setter so React updates consumers and derived values like cart_length
    setProductCart([]);
    setProducts([]);
    Swal.fire({
      icon: "success",
      title: "Cart cleared",
      text: `Your cart has been cleared.`,
      confirmButtonColor: "#6c82a1ff",
    });
  };

  useEffect(() => {
    if (!prod_cart || prod_cart.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    getProducts();
  }, [prod_cart]);

  if (loading) {
    return (
      <div className="loader-wrapper d-flex justify-content-center mt-5 pt-5 mb-5">
        <BeatLoader color="#106ab9ff" loading={loading} size={40} />
      </div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="cart-empty container d-flex flex-column align-items-center justify-content-center">
        <p className="display-3 fw-bold text-center">Your cart is empty</p>
        <p className="text-muted">
          Looks like you haven't added any products yet.
        </p>
        <Link to="/products" className="p-3 btn btn-outline-primary mt-3">
          Browse products
        </Link>
      </div>
    );
  }

  const buy_s = () => {
    return Swal.fire({
      icon: "success",
      title: "Buy successfully",
      text: `Buy completed successfully.`,
      confirmButtonColor: "#0d6efd",
    });
  };

  const subtotal = products.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <div className="cart-page container">
      <div className="row">
        <div className="col-lg-8">
          {products.map((product) => (
            <div key={product.id} className="cart-item">
              <ProductCartDetails product={product} />
            </div>
          ))}
        </div>
        <div className="col-lg-4">
          <aside className="cart-summary p-4">
            <h4 className="mb-2">Order Summary</h4>
            <hr />
            <div className="d-flex justify-content-between">
              <div>Items</div>
              <div className="fw-bold">{products.length}</div>
            </div>
            <div className="subtotal d-flex justify-content-between align-items-center mt-3">
              <div>Subtotal</div>
              <div className="fw-bold">${subtotal.toFixed(2)}</div>
            </div>
            <div className=" d-flex gap-2 justify-content-between align-items-center mt-4">
              <button className="btn btn-primary w-100" onClick={() => buy_s()}>
                Buy now
              </button>
              <button
                className="btn btn-outline-danger w-100"
                onClick={clear_cart}
              >
                Clear my cart
              </button>
            </div>
            <Link
              to="/products"
              className="btn btn-outline-secondary w-100 mt-3"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
