import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import styled from "styled-components";

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`;

const House = () => {
  const [house, setHouse] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = this.props.match.params.slug;
    // Note: you can use string interpolation for this (`api/v1/${slug}`),
    // my code highlighter is struggling with it so I'm doing this
    const url = "/api/v1/houses/" + slug;

    axios
      .get(url)
      .then((resp) => {
        setHouse(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    // <div>
    //   <div className="column">
    //     {loaded && <Header attributes={airline.data.attributes} />}

    //     <div className="reviews">[reviews will go here]</div>
    //   </div>
    //   <div className="column">[new review form will go here]</div>
    // </div>

    <div>
      <Column>
        <Header>
          <img src={image_url} alt={name} width="50" />
          <h1>{name}</h1>
        </Header>
        <div className="reviews">[reviews will go here]</div>
      </Column>
      <Column>[new review form will go here]</Column>
    </div>
  );
};

export default House;
