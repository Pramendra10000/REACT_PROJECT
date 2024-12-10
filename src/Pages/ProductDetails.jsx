import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CSS/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dummyProducts = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 10, image: 'path_to_image_1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 20, image: 'path_to_image_2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 30, image: 'path_to_image_3' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: 40, image: 'path_to_image_4' },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: 50, image: 'path_to_image_5' },
    { id: 6, name: 'Product 6', description: 'Description for product 6', price: 60, image: 'path_to_image_6' },
  ];

  useEffect(() => {
    const selectedProduct = dummyProducts.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <div className="product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <h3>Related Products</h3>
      <div className="related-products">
        {dummyProducts.filter(p => p.id !== product.id).map((relatedProduct) => (
          <div key={relatedProduct.id} className="related-product-card">
            <Link to={`/product/${relatedProduct.id}`} className="related-product-link">
              <img src={relatedProduct.image} alt={relatedProduct.name} className="related-product-image" />
              <h3 className="related-product-title">{relatedProduct.name}</h3>
              <p className="related-product-price">${relatedProduct.price}</p>
              <Link to={`/product/${relatedProduct.id}`} className="view-details-link">
                View Details
              </Link>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
