import React, { useState } from "react";
import "./navbar.css";
import Boas from "../../assets/baos.avif";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillFlagFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [category, setCategory] = useState("default");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOverTwo, setIsMouseOverTwo] = useState(false);
  const [third, setThird] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleMouseOverT = () => {
    setIsMouseOverTwo(true);
  };
  const handleMouseOutT = () => {
    setIsMouseOverTwo(false);
  };
  const thirdMouse = () => {
    setThird(true);
  };
  const thirdOut = () => {
    setThird(false);
  };

  const showData = (category) => {
    setCategory(category);
  };

  let content;

  switch (category) {
    case "default":
      content =
        "Shoes  clothing   furniture   Transport   Toys   Accessories   Food   Brand   Gift   Diaper";
      break;
    case "kids":
      content = " Shoes  Toys Accessories Sports  Gift";
      break;
    case "women":
      content = "Sustainable T-shirts  Jeans   Vintage Levi's Jeans";
      break;
    case "men":
      content = "Sustainable T-shirts  Jeans   Vintage Levi's Jeans";
      break;
    default:
      content =
        "Shoes  clothing   furniture   Transport   Toys   Accessories   Food   Brand   Gift   Diaper";
      break;
  }

  return (
    <nav>
      <div className="desktop-style">
        <div className="first-sec">
          <span onClick={() => showData("default")}>Baby</span>
          <span onClick={() => showData("men")}>Men</span>
          <span onClick={() => showData("kids")}>Kids</span>
          <span onClick={() => showData("women")}>Women</span>
          <AiOutlineSearch />
        </div>
        <div>
          <img src={Boas} alt="" className="baos-img" />
        </div>

        <div className="last-sec">
          <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            About Us
            <BiDownArrowAlt />
          </span>
          {isMouseOver && (
            <div className="hov">
              <p>mission</p>
              <p>All profit donated</p>
              <p>Team</p>
              <p>customer feedback</p>
            </div>
          )}

          <span onMouseOver={handleMouseOverT} onMouseOut={handleMouseOutT}>
            Account
            <BsFillPersonFill />
          </span>
          {isMouseOverTwo && (
            <div className="hovI">
              <p>login</p>
              <p>signup</p>
            </div>
          )}
          <span>
            Cart
            <BsFillCartFill />
          </span>

          <span onMouseOver={thirdMouse} onMouseOut={thirdOut}>
            Language <BsFillFlagFill />
          </span>
          {third && (
            <div className="hov-i">
              <small>
                <BsFillFlagFill /> English
              </small>
              <small>
                <BsFillFlagFill /> Spanish
              </small>
              <small>
                <BsFillFlagFill />
                French
              </small>
              <small>
                <BsFillFlagFill />
                Italia
              </small>
              <small>
                <BsFillFlagFill />
                Sweden
              </small>
            </div>
          )}
        </div>
      </div>
      <div className="data">
        <p>{content}</p>
      </div>
      {/* Mobile View */}
      <div className="small-view">
        <div className="hamb">
          <p>
            <RxHamburgerMenu size={23} onClick={() => setClick(true)} />
          </p>
        </div>
      
        <div className="sec-view">
          <img src={Boas} alt="" className="mobile-img" />
          <p>
            {" "}
            <AiOutlineSearch size={23} />{" "}
          </p>
          <p>
            {" "}
            <BsFillPersonFill size={23} />
          </p>
          <p>
            {" "}
            <BsFillCartFill size={23} />
          </p>
          <p>
            {" "}
            <BsFillFlagFill size={23} />
          </p>
        </div>
       
      </div>
       {click && (
          <div className="mobile-iii">
              <p>
                <MdCancel onClick={()=> setClick(false)} size={24}/>
              </p>
            <div className='mobile-outer' >
               <input type="text" name="" id=""  className="store" placeholder="Search our store"/>
                  <div className="sub">
                     <p>Women</p>
                     <p><BiDownArrowAlt/></p>
                  </div>
                  <div className="sub">
                     <p>Men</p>
                     <p><BiDownArrowAlt/></p>
                  </div>
                  <div className="sub">
                     <p>Kids</p>
                     <p><BiDownArrowAlt/></p>
                  </div>
                  <div className="sub">
                     <p>Baby</p>
                     <p><BiDownArrowAlt/></p>
                  </div>
                  <div className="sub">
                     <p>About Us</p>
                     <p><BiDownArrowAlt/></p>
                  </div>
                  <div className="sub">
                     <p>Contact Us</p>
                     <p><BiDownArrowAlt/></p>
                  </div>

            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
