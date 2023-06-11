import React from "react";
import pure from "../../assets/pure.webp";
import nrc from "../../assets/nrc.avif";
import baos from "../../assets/baos.avif";
import flute from "../../assets/flute.avif";
import "./brand.css";
import { Carousel, Radio } from "antd";
import { useState } from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Brand = () => {
  const [dotPosition, setDotPosition] = useState("top");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <div className="brand">
      <div className="text">
        <h3>Our Brands</h3>
      </div>
      <div className="brand-div">
        <img src={pure} alt="" className="brand-img" />
        <img src={nrc} alt="" className="brand-img" />
        <img src={baos} alt="" className="brand-img" />
        <img src={flute} alt="" className="brand-img" />
      </div>
      <div>
        <div className="blog">
          <h3>BAO'S Blog</h3>
        </div>
        <div>
          <>
            <Radio.Group
              onChange={handlePositionChange}
              value={dotPosition}
              style={{
                marginBottom: 8,
              }}
            ></Radio.Group>
            <Carousel dotPosition={dotPosition}>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </>
        </div>
      </div>
      <div className="newsletter">
        <div className="news">
          <h3>Join the Lifesaver Newsletter</h3>
          <p>
            Get updates and tips from the world of sustainability, circular
            fashion, and ethical business.
          </p>
          <input type="text" name="" id="" placeholder="Enter Address" />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
