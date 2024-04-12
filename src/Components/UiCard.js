import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UiCard = () => {
  const [cards, setCards] = useState([]);
  const [domain, setDomain] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5500/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const fetchCardsByDomain = async (domain) => {
    try {
      const response = await axios.get(`http://localhost:5500/cards/${domain}`);
      setCards(response.data);
    } catch (error) {
      console.error(`Error fetching ${domain} cards:`, error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCard = { domain, title, description, tags };
      const response = await axios.post('http://localhost:5500/cards', newCard);
      setCards([...cards, response.data]);
      setDomain('');
      setTitle('');
      setDescription('');
      setTags('');
      alert('Card created successfully');
    } catch (error) {
      console.error('Error posting card:', error);
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card._id === selectedCard ? null : card._id);
  };

  const handleReset = () => {
    fetchCards();
    setSelectedCard(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'domain') setDomain(value);
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
    if (name === 'tags') setTags(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="domain"
          value={domain}
          onChange={handleChange}
          placeholder="Enter domain"
          required
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        />
        <input
          type="text"
          name="tags"
          value={tags}
          onChange={handleChange}
          placeholder="Enter tags"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      <button onClick={() => fetchCardsByDomain('property')}>Fetch Property Cards</button>
      <div>
        {cards.map(card => (
          <button key={card._id} onClick={() => handleCardClick(card)}>
            <h3>{card.title}</h3>
            {selectedCard === card._id && <p>{card.description}</p>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UiCard;
