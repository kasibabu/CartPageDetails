import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "./Cart.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/carts/2");
        const data = await response.json();
        setCart(data.products);
        console.log(data.products, "cart products");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const promises = cart.map(async (product) => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${product.productId}`
          );
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      });

      const productDetails = await Promise.all(promises);
      setProductDetails(productDetails);
    };

    fetchProductDetails();
  }, [cart]);

  console.log(cart, productDetails, "cart page ");

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div>
        <ul className="card-container">
          {productDetails &&
            productDetails.map((item) => {
              return (
                <li key={item.id}>
                  <div className="card">
                    <img src={item.image} alt={item.title} className="image" />
                    <div className="details">
                      <Link to={`/product/${item.id}`} className="link">
                        {item.title}
                      </Link>
                      <p className="price">${item.price}</p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
