import React from "react";

function hotelItem({ image, name }) {
  return (
    <div className="hotelItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h5> {name} </h5>
    </div>
  );
}

export default hotelItem;