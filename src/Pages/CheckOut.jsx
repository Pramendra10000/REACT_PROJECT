import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/CheckOut.css';

const CheckOut = () => {
  const location = useLocation(); // Access the cart data passed via navigate
  const { cartItems } = location.state || {}; // Get cart items from state

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });

  // Calculate subtotal from cart items
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate GST (e.g., 10%)
  const calculateGST = () => {
    return calculateSubtotal() * 0.10; // Adjust percentage as needed
  };

  // Calculate delivery charges (flat rate of $5 for simplicity)
  const calculateDeliveryCharges = () => {
    return 5.00; // Adjust delivery charges as needed
  };

  // Calculate the total price
  const calculateTotal = () => {
    return calculateSubtotal() + calculateGST() + calculateDeliveryCharges();
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPaymentMethod === 'upi' && !upiId) {
      alert('Please enter your UPI ID');
      return;
    }
    if (selectedPaymentMethod === 'card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please enter complete card details');
      return;
    }
    alert('Payment Successful!');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* Cart Details */}
      <div className="cart-details">
        <h3>Your Cart</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Subtotal: ₹{calculateSubtotal().toFixed(2)}</p>
        <p>GST (10%): ₹{calculateGST().toFixed(2)}</p>
        <p>Delivery Charges: ₹{calculateDeliveryCharges().toFixed(2)}</p>
        <p className="total">Total: ₹{calculateTotal().toFixed(2)}</p>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <h3>Select Payment Method</h3>
        <div>
          <input
            type="radio"
            id="upi"
            name="payment-method"
            value="upi"
            checked={selectedPaymentMethod === 'upi'}
            onChange={() => handlePaymentMethodChange('upi')}
          />
          <label htmlFor="upi">UPI</label>
        </div>

        <div>
          <input
            type="radio"
            id="card"
            name="payment-method"
            value="card"
            checked={selectedPaymentMethod === 'card'}
            onChange={() => handlePaymentMethodChange('card')}
          />
          <label htmlFor="card">Credit/Debit Card</label>
        </div>

        <div>
          <input
            type="radio"
            id="net-banking"
            name="payment-method"
            value="net-banking"
            checked={selectedPaymentMethod === 'net-banking'}
            onChange={() => handlePaymentMethodChange('net-banking')}
          />
          <label htmlFor="net-banking">Net Banking</label>
        </div>

        {/* Conditional Form Fields */}
        {selectedPaymentMethod === 'upi' && (
          <div className="upi-details">
            <label>Enter UPI ID:</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="example@upi"
              required
            />
          </div>
        )}

        {selectedPaymentMethod === 'card' && (
          <div className="card-details">
            <label>Card Number:</label>
            <input
              type="text"
              name="number"
              value={cardDetails.number}
              onChange={handleCardDetailsChange}
              placeholder="Card Number"
              required
            />
            <label>Expiry Date:</label>
            <input
              type="text"
              name="expiry"
              value={cardDetails.expiry}
              onChange={handleCardDetailsChange}
              placeholder="MM/YY"
              required
            />
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleCardDetailsChange}
              placeholder="CVV"
              required
            />
          </div>
        )}

        {selectedPaymentMethod === 'net-banking' && (
          <div className="net-banking-details">
            <label>Select Bank:</label>
            <select required>
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit}>Proceed to Pay ₹{calculateTotal().toFixed(2)}</button>
    </div>
  );
};

export default CheckOut;
