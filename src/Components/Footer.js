import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import '../Components/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        < FaInstagram className="icons" />
         <FaTwitter className="icons" /> 
         <FaFacebook className="icons"/>
      
      </div>
      <p> &copy; zahra tulaiya maintenance services.com </p>
    </div>
  );
}

export default Footer;