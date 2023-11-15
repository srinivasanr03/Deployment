import React, { useState } from 'react';
import "../styles/popupform.css";
import Checkout from './checkout';
const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initial values for form fields
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the form data to your server or perform any other necessary actions.
    // After submitting the form, you can close the popup by calling the onClose function.
    onClose();
  };

  return (
      <div className='.popup-form'>
        Checkout<Checkout></Checkout>
      </div>
  );
};

export default PopupForm;
