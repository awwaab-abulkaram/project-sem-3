import React, { useEffect, useState } from 'react'
import ComplaintForm from '../complaintnew'

  

const FileComplaint = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("mongodb://localhost:27017/"); // Replace the URL with your backend API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
   
  return (
    <div><ComplaintForm/></div>
  )
}

export default FileComplaint