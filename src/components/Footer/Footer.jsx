import "./footer.css";
import baos from '../../assets/baos.avif'
import amazon from '../../assets/amazon.webp'
import paypal from '../../assets/paypal.png'
import master from '../../assets/master-card.png'
import visa from '../../assets/visa.png'

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="footer-first">
          <img src={baos} alt="" />
          <p>
            You've made it to the end! Thanks for taking the time. If you're
            here because you're lost, feel free to contact us and we'll get you
            back on track.
          </p>
          <h4>Follow us on</h4>
        </div>
        <div className="footer-sec">
            <h4>ABOUT BAOS</h4>
            <p>mission</p>
            <p>sustainbility</p>
            <p>FAQ</p>
            <p>contact</p>
            <p>Blog</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Shipping and returns</p>
        </div>
        <div className="footer-l">
            <h4>Brands and Press</h4>
            <p>sell on BAOS</p>
            <p>Press</p>
            <p>Affliatte Program </p>
            <h4>NEW TO BOAS?</h4>
            <p>Subscribe to our newsletter to get updates on new offers.</p>
            <input type="text" name="" id=""  placeholder="Enter your Address"/>
            <button>SUBSCRIBE</button>
        </div>
      </div>
      <div>
         <div className="support-div">
            <h3 className="support">Supported Payment Methods</h3>
            <img src={amazon} alt="" />
            <img src={paypal} alt="" />
            <img src={master} alt="" />
            <img src={visa} alt="" />
         </div>
         <p className="terms">Privacy | terms</p>
         <p className="copy">Copyright © 2022 BOAS Marketplace</p>
      </div>
    </div>
  );
};

export default Footer;
