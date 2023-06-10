import React, { useState, useEffect } from 'react';
import './dynamictext.css'

const DynamicText = () => {
  const texts = ['All profit donated bto save kids live', 'reverse auction vintage jeans as low as $1 ', 'Free shipping on jeans']; // Array of texts to cycle through
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  return (
      <div className='dynamic'>
         <h1>{currentText}</h1>
      </div>
  );
};

export default DynamicText;
