import React from "react";
import { hotelsList } from "../helpers/hotelsList";
import HotelItem from "../Components/hotelItem";
import '../pages/hotels.css';


function hotels() {
  return (
    <div className="hotels">
      <h1 className="hotelTitle">BUILDING MAINTENANCE SERVICES</h1>
      <div className="hotelsList">
        {hotelsList.map((hotelItem , key) => {
          return (
            <HotelItem
            // key={key}
              image={hotelItem.image}
              name={hotelItem.name}
              />
              
          );
        })}
      </div>
    </div>
  );
}

export default hotels;