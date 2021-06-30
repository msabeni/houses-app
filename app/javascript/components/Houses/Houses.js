import React, { useState, useEffect } from "react";
import axios from "axios";
import House from "../House/House";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Our code will go here
    axios
      .get("/api/v1/houses")
      .then((resp) => {
        setHouses(resp.data);
      })
      .catch((data) => {
        debugger;
      });
  }, []);

  const grid = houses.map((house, index) => {
    return <li key={index}>{house.data.attributes.name}</li>;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>AmazingHomes</h1>
        <p className="subheader">
          Honest, unbiased house reviews. Share your experience with us.
        </p>
      </div>
      <div className="grid">
        <ul>{grid}</ul>
      </div>
    </div>
  );
};

export default Houses;
