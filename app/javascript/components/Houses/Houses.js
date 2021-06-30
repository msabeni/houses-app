import React, { useState, useEffect } from "react";
import axios from "axios";
//import House from "../House/House";
import House from "./House";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;

const Subheader = styled.p`
  font-weight: 300;
  font-size: 26px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/houses")
      .then((resp) => {
        setHouses(resp.data.data);
      })
      .catch((data) => {
        debugger;
      });
  }, []);

  const grid = houses.map((house, index) => {
    return <House key={index} attributes={house.data.attributes} />;
  });

  return (
    <Home>
      <Header>
        <h1>AmazingHomes</h1>
        <Subheader>
          Honest, unbiased house reviews. Share your experience with us.
        </Subheader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Houses;
