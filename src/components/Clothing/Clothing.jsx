import React from "react";
import "./clothing.css";

const Clothing = () => {
  return (
    <div className="clothing">
      <div className="clothing-text">
        <h1>Meet the new shopping experience for vintage jeans</h1>
        <p>
          BOAS is the best place for sustainable and pre-owned fashion, where
          all profits are donated to charity.
        </p>
      </div>
      <div className="clothing-btn">
        <button className="shop">SHOP NOW</button>
        <button className="mission">ABOUT OUR MISSION</button>
      </div>
    </div>
  );
};

export default Clothing;
