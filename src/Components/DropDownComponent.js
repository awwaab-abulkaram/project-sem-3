import React, { useState } from 'react';
import CardComponent from './CardComponent'; // Assuming the path to your CardComponent file

const DropdownComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('domestic violence'); // Initial selected category

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label htmlFor="categoryDropdown">Select a category:</label>
      <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="domestic violence">domestic violence</option>
        <option value="property">Property</option>
        <option value="agriculture">Agriculture</option>
        {/* Add more options here */}
      </select>
      <CardComponent category={selectedCategory} />
    </div>
  );
};

export default DropdownComponent;
