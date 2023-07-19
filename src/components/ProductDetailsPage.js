import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import './ProductDetailsPage.css';
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const data = await response.json();
        setProductDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="product-card">
        <h1 className="title">Product Details</h1>
        {productDetails && (
          <div className="details">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="image"
            />
            <h3>{productDetails.title}</h3>
            <p>Price: ${productDetails.price}</p>
            <p className="description">{productDetails.description}</p>
          </div>
        )}
        <Link to="/cart" className="link">
          Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
