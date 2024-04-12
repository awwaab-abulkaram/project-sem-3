import React, { useState } from 'react';
import axios from 'axios';

const CardInput = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    domain: '',
    tags: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append('image', formData.image);
      postData.append('name', formData.name);
      postData.append('domain', formData.domain);
      // Split tags input into an array
      const tagsArray = formData.tags.split(',').map(tag => tag.trim());
      postData.append('tags', JSON.stringify(tagsArray));

      const response = await axios.post('http://localhost:5500/cards', postData);
      console.log('Data inserted successfully:', response.data);
      setSuccessMessage('Data inserted successfully');
      // Reset form after successful submission
      setFormData({
        image: null,
        name: '',
        domain: '',
        tags: '',
      });
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
      <h2>Insert Data Form</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="domain">Domain:</label>
          <input type="text" id="domain" name="domain" value={formData.domain} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} />
        </div>
        <button type="submit">Insert Data</button>
      </form>
    </div>
  );
};

export default CardInput;
