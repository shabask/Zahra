
import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";

function Home() {
  return (
    <div className="home">
      
<p>Precision in maintenance, excellence in care.</p>

      <div className="headerContainer">
       
        <Link to="/hotels">
          <button>OUR SERVICES</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
