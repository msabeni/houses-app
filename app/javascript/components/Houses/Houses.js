import React, { useState } from "react";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  return (
    <div className="home">
      <div className="header">
        <h1>AmazingHomes</h1>
        <p className="subheader">
          Honest, unbiased house reviews. Share your experience with us.
        </p>
      </div>
      <div className="grid">HOUSES GRID GOES HERE</div>
    </div>
  );
};

export default Houses;
