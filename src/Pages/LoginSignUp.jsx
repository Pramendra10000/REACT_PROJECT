import React, { useState } from 'react';
import './LoginSignUp.css';  // External CSS file

const LoginSignUp = () => {
  const [isSignup, setIsSignup] = useState(false);  // Toggle between Login and Signup

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    mobileError: '',
    passwordError: ''
  });

  // Handle input change and validate
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if (name === 'mobile') {
      // Validate mobile number as user types
      if (!validateMobile(value)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          mobileError: 'Mobile number must start with 5, 6, 7, 8, or 9 and be 10 digits long.'
        }));
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          mobileError: ''
        }));
      }
    }

    if (name === 'password') {
      // Validate password as user types
      if (!validatePassword(value)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          passwordError: 'Password must be at least 8 characters, with one uppercase, one number, and one symbol.'
        }));
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          passwordError: ''
        }));
      }
    }
  };

  // Validate mobile number
  const validateMobile = (mobile) => {
    const mobileRegex = /^[5-9]\d{9}$/;  // Starts with 5-9 and has 10 digits
    return mobileRegex.test(mobile);
  };

  // Validate password
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\/-]).{8,}$/;
    // Must have at least 1 uppercase letter, 1 number, 1 symbol, and be at least 8 characters
    return passwordRegex.test(password);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mobile number on submit if not already validated
    if (isSignup && !validateMobile(formData.mobile)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        mobileError: 'Mobile number must start with 5, 6, 7, 8, or 9 and be 10 digits long.'
      }));
      return;
    }

    // Validate password on submit if not already validated
    if (!validatePassword(formData.password)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Password must be at least 8 characters, with one uppercase, one number, and one symbol.'
      }));
      return;
    }

    // If validation passes, log the form data
    if (isSignup) {
      console.log('Signup data:', formData);
    } else {
      console.log('Login data:', { email: formData.email, password: formData.password });
    }

    setFormData({ name: '', mobile: '', email: '', password: '' }); // Clear form
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h1>{isSignup ? 'Create Your Account' : 'Login to Your Account'}</h1>

        <form onSubmit={handleSubmit}>

          {isSignup && (
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {isSignup && (
            <div className="input-group">
              <label htmlFor="mobile">Mobile No.</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              {formErrors.mobileError && <span className="error-text">{formErrors.mobileError}</span>}
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {formErrors.passwordError && <span className="error-text">{formErrors.passwordError}</span>}
          </div>

          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="toggle-form">
          <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setIsSignup(!isSignup)}>{isSignup ? 'Login' : 'Sign Up'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
