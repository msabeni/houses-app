import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  font-family: sans-serif;
`;
const HouseLogo = styled.div`
  height: 50px;
`;
const HouseName = styled.div`
  padding: 20px;
`;
const LinkWrapper = styled.div`
  margin: 20px 0;

  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
  }
`;

const House = (props) => {
  const { name, image_url, slug } = props.attributes;

  return (
    <Card>
      <HouseLogo>
        <img src={image_url} alt={name} width="50" />
      </HouseLogo>
      <HouseName>{name}</HouseName>
      <LinkWrapper>
        <Link to={"/" + slug}>View House</Link>
      </LinkWrapper>
    </Card>
  );
};

export default House;
