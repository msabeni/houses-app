import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
`;
const Title = styled.div`
  padding: 20px 0px;
  font-weight: bold;
`;
const Description = styled.div`
  padding: 0 0 20px 0;
`;

const Review = (props) => {
  <Card>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
    <div className="review-rating">{props.score}</div>
  </Card>;
};

export default Review;
