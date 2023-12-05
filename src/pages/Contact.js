import React from "react";
import "../pages/Contact.css";

function Contact() {
  const callUs = () => {
    window.location.href = 'tel:+971566052778';
  };

  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <div>
          <h4><strong>Contact Us</strong></h4>
          <div>
            <p><strong>Mr. Pradeep Thwkkedath</strong></p>
            <p><strong>Operation Manager</strong></p>
            <p>+971 566052778</p>
            <p>+971 566117625</p>
            <p>zahratulaiyauae71@gmail.com</p>
            <p><strong>AL KARAMA</strong></p>
            <p><strong>UNITED ARAB EMIRATES</strong></p>
          </div>
          <button className="callButton" onClick={callUs}>Call Us</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
