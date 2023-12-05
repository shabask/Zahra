import React, { useState } from "react";
import Logo from "../assets/icon zt.png";
import {Link} from "react-router-dom";
import { IoReorderFourSharp } from "react-icons/io5";
import "../Navbar/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />

        <>
      <h3> ZAHRA TULAIYA  MANAGEMENT SERVICES </h3></>
        <div className="hiddenLinks">
    
          <Link to="/"> Home </Link>
          <Link to="/hotels"> Services </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
         
        </div>
      </div>
      <div className="rightSide">
     
        <Link to="/"> Home </Link>
        <Link to="/hotels"> Services </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <IoReorderFourSharp className="icons" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;