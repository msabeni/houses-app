import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

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
    <div>
      <div className="column">
        {loaded && <Header attributes={airline.data.attributes} />}

        <div className="reviews">[reviews will go here]</div>
      </div>
      <div className="column">[new review form will go here]</div>
    </div>
  );
};

export default House;
