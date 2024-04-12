import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardComponent = ({ category }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards(category);
  }, [category]);

  const fetchCards = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5500/cards/${category}`);
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards', error);
    }
  };

  return (
    <div>
      <h2>{category}</h2>
      <div className="card-container">
        {cards.map(card => (
          <div key={card._id} className="card">
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
