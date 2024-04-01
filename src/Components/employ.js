import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employ = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/test'); // Assuming your API endpoint is '/api/data'
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.description}</li> // Replace 'your_field_name' with the field you want to display
        ))}
      </ul>
    </div>
  );
};

export default Employ;
