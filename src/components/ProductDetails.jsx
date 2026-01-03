import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router';
import { BeatLoader } from 'react-spinners';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const addToCart = (quantity = qty) => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${product.title} (x${quantity}) has been added.`,
      confirmButtonColor: '#0d6efd',
    });
  };
  if (loading) {
    return (
      <div className="loader-wrapper">
        <BeatLoader 
          color="#106ab9ff" 
          loading={loading} 
          size={20} 
        />
      </div>
    );
  }

  return (
    <div className="product-details container my-5">
      <Helmet>
        <title>{product.title} - Product Details</title>
      </Helmet>
      
      <Link to="/" className="btn btn-outline-secondary mb-4 back-btn">
        ← Back to Products
      </Link>
      
      <div className="row g-4 align-items-start">
        <div className="col-md-5">
          <div className="product-image">
            <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="text-muted mb-2">
            <span className="badge bg-secondary category-badge">{product.category}</span>
          </p>
          <div className="d-flex align-items-center my-3">
            <div className="price me-3">${Number(product.price).toFixed(2)}</div>
            {product.rating?.rate && (
              <div className="rating text-muted">⭐ {product.rating.rate} ({product.rating.count})</div>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="actions d-flex align-items-center gap-3 mt-4">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
              className="form-control qty-input"
            />
            <button onClick={() => addToCart(qty)} className="btn btn-primary btn-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}