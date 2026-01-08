import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router';
import { BeatLoader } from 'react-spinners';
import { ProductCardDetails } from './ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="loader-wrapper d-flex justify-content-center mt-5 mb-5">
        <BeatLoader
          color="#106ab9ff"
          loading={loading}
          size={40}
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

      <ProductCardDetails product={product} />
    </div>
  );
}