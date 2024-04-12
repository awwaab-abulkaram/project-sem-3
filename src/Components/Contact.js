import React, {useState } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar3'
import Footer from './Footer'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import './FeedbackForm.css'; // Import the CSS file

const Contact = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5500/storeFeedback', formData);
      setFormData({
        name: '',
        mobile: '',
        feedback: ''
      });
      setOpenAlert(true)
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again later.');
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
};

  return (
    <div>
      <Navbar2 />
      <div className='contact-container'>
      <div className='image-contact'>
      <h1 style={{textAlign:"center"}}>Reach out to us!</h1>
    <div className="feedback-form-container">
      <h2>Get In Touch With Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Message:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
    </div>
    </div>
    <h1 className='primary-heading'>Meet the team :</h1>
    <h2 className='primary-text'>Mentored by Dr. R Madhavi,</h2>
    </div>
  );
};

export default Contact;
