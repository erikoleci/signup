import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import './Signup.css'; // Import the CSS file

function Signup() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className='container'>
      <div className='form-wrapper'>
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label> 
            <input type='text' placeholder='Enter Name' name='name' className='form-control rounded-0' value={formData.name} onChange={handleChange} />
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label> 
            <input type='email' placeholder='Enter Email' name='email' className='form-control rounded-0' value={formData.email} onChange={handleChange} />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label> 
            <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' value={formData.password} onChange={handleChange} />
          </div>

          <div className='mb-3'>
            <label htmlFor='phoneNumber'><strong>Phone Number</strong></label> 
            <PhoneInput
              className='form-control rounded-0'
              placeholder='Enter phone number'
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              name='phoneNumber'
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
          <p>You agree to our terms and policies</p>
          <a href='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</a>

        </form>
      </div>
    </div>
  )
}

export default Signup;
