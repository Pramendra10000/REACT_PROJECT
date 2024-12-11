import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/ProductDetails.css'; // Your custom styles for ProductDetails

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios.get(`http://localhost:8090/product/${id}`) // Fetch product details by ID
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  const addToCart = () => {
    // Get existing cart from local storage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
      // If it exists, increase quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // If it doesn't exist, add new product with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }
    
    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Navigate to Cart page
    navigate('/cart');
  };

  const buyNow = () => {
    // Navigate to Checkout page with product data
    navigate('/checkout', { state: { cartItems: [{ ...product, quantity: 1 }] } });
  };

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="row">
          <div className="col-md-6">
            {product.image ? (
              <img 
                src={`data:image/jpeg;base64,${product.image}`} 
                alt={product.name} 
                className="product-details-image" 
              />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
          </div>
          <div className="col-md-6">
            <h2 className="product-details-title">{product.name}</h2>
            <p className="product-details-description">{product.description}</p>
            <p className="product-details-price">${product.price}</p>
            <p className="product-details-stock">Stock: {product.stockQuantity}</p>
            <p className="product-details-category">Category: {product.category}</p>
            <p className="product-details-brand">Brand: {product.brand}</p>
            <p className="product-details-ratings">Ratings: {product.ratings}</p>
            <p className="product-details-sku">SKU: {product.sku}</p>
            <p className="product-details-discount">Discount: {product.discount}%</p>

            {/* Buttons for Buy Now and Add to Cart */}
            <div className="button-container">
              <button className="buy-now-button" onClick={buyNow}>BUY NOW</button>
              <button className="add-to-cart-button" onClick={addToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
