import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [laws, setLaws] = useState([]);
  const [newDocument, setNewDocument] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchLaws(); // Fetch laws when the component mounts
  }, []);

  const fetchLaws = () => {
    axios.get('http://localhost:5500/getUsers')
      .then(response => setLaws(response.data))
      .catch(err => console.error(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDocument(prevDocument => ({
      ...prevDocument,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the backend to store the new document
    axios.post('http://localhost:5500/addDocument', newDocument)
      .then(() => {
        // If the request is successful, fetch the updated list of documents
        fetchLaws();
        // Reset the input fields
        setNewDocument({ name: '', description: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newDocument.name}
            placeholder="Enter document name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={newDocument.description}
            placeholder="Enter document description"
            onChange={handleInputChange}
          />
          <button type="submit">Add Document</button>
        </form>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {laws.map((law, index) => (
            <tr key={index}>
              <td>{law.name}</td>
              <td>{law.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
