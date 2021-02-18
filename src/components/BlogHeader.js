import React from "react";
import styled from "styled-components";
import { colors, fonts, mediaQueries } from "../shared/config";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const { notMobile } = mediaQueries;

const Container = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const Title = styled("div")`
  font-family: "Roboto";
  color: ${colors.primarygrey};
  font-weight: 800;
  font-size: calc(2vmin + 15px);
`;

const Date = styled("div")`
  font-family: "Roboto";
  color: ${colors.primarygrey};
  font-weight: bold;
  font-size: calc(2vmin + 5px);
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Image = styled("div")`
  max-width: 800px;
  padding: 20px;
`;

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Title> {this.props.title} </Title>
        <Date> {this.props.date} </Date>
        <Image>
          <img style={{ width: "100%" }} src={this.props.img}></img>
        </Image>
      </Container>
    );
  }
}

export default BlogHeader;
