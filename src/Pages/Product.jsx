import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CSS/Product.css'; // Your custom styles

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/products2')  // API endpoint for fetching products
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-card">
            {/* Only render image if base64Image is not null */}
            {product.base64Image ? (
              <img 
                src={`data:image/jpeg;base64,${product.base64Image}`} 
                alt={product.name} 
                className="product-image" 
              />
            ) : (
              <div className="no-image">No Image Available</div> // Placeholder if no image is available
            )}
            <div className="product-details">
              <h2 className="product-title">{product.name}</h2>
              {/* <p className="product-description">{product.description}</p> */}
              <p className="product-price">${product.price}</p>
              {/* <p className="product-stock">Stock: {product.stockQuantity}</p>
              <p className="product-category">Category: {product.category}</p> */}
              {/* <p className="product-brand">Brand: {product.brand}</p> */}
              <p className="product-ratings">Ratings: {product.ratings}</p>
              {/* <p className="product-sku">SKU: {product.sku}</p> */}
              <p className="product-discount">Discount: {product.discount}%</p>
              <Link to={`/product/${product.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;