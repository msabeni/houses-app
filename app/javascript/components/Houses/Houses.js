import React, { useState } from "react";
import axios from "axios";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Our code will go here
    axios.get('/api/v1/houses')
    .then( resp => {
      debugger
    })
    .catch( data => {
      debugger
    })
  }, []);

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
