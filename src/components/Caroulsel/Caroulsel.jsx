import React, { useState } from 'react';
import './caroulsel.css'

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleClick = (index) => {
    setCurrentItem(index);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <div className={`carousel-item ${index === currentItem ? 'active' : ''}`} key={index}>
        {item}
      </div>
    ));
  };

  const renderDots = () => {
    return items.map((item, index) => (
      <span
        className={`dot ${index === currentItem ? 'active' : ''}`}
        key={index}
        onClick={() => handleClick(index)}
      />
    ));
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-items">{renderItems()}</div>
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
};

export default Carousel;
