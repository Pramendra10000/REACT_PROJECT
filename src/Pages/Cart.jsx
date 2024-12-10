import React, { useState } from 'react';
import './CSS/Cart.css';

const Cart = () => {
  // Sample cart data
  const initialCart = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 35, quantity: 1 },
    { id: 3, name: 'Product 3', price: 50, quantity: 3 }
  ];

  // State for cart items
  const [cartItems, setCartItems] = useState(initialCart);

  // Handle changing quantity
  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  // Handle removing an item
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
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
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
