import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './CSS/Cart.css';

const Cart = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Handle changing quantity
  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  // Handle removing an item
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  // Calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate taxes (e.g., 10%)
  const calculateTaxes = () => {
    return calculateSubtotal() * 0.10;
  };

  // Calculate shipping (flat rate of $5 for simplicity)
  const calculateShipping = () => {
    return 5.00;
  };

  // Calculate the total price
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxes() + calculateShipping();
  };

  const handleCheckout = () => {
    // Pass the cart data as state to the Checkout page
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      
      {/* Cart items list */}
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="item-quantity">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="item-total">
                ${ (item.price * item.quantity).toFixed(2) }
              </div>
              <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      {/* Subtotal, Taxes, Shipping, and Total */}
      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Taxes (10%):</span>
          <span>${calculateTaxes().toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping:</span>
          <span>${calculateShipping().toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="checkout">
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
