import React from "react";
import save from "../../assets/saving.jpg";
import kids from '../../assets/kids.avif'
import "./save.css";

const Save = () => {
  return (
    <div className="save-bg">
      <div className="save-div">
        <div className="save-1">
          <h2>Saving lives while you live yours</h2>
          <p>
            We donate all profits to save kids lives, instead of giving it to
            rich investors.
          </p>
          <button>Learn more</button>
        </div>
        <div className="save-img">
          <img src={save} alt="" />
        </div>
      </div>
      <div className="kids-product">
        <div>
          <img src={kids} alt="" />
        </div>
        <div className="kids-pro">
          <h2>Sustainable Kids' Products</h2>
          <p>
            We read the labels, do the research and find the products you want,
            so you don't have to.
          </p>
          <button>How</button>
        </div>
      </div>
      <div className="kids-div">
         <h4>€2.378</h4>
         <p>Donated to charities that save kids' lives!</p>
         <button>See Donations</button>
      </div>
    </div>
  );
};

export default Save;
