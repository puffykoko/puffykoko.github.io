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
  box-sizing: border-box;
  max-width: 700px;
  padding: 0 20px;
  text-align: left;
  margin-bottom: 15px;
`;

const Title = styled("div")`
  font-family: "Roboto";
  color: ${colors.primarygrey};
  font-weight: 800;
  font-size: calc(2vmin + 10px);
  margin-bottom: 15px;
`;

const Text = styled("div")`
  font-family: "Roboto";
  color: ${colors.primarygrey};
  font-size: calc(2vmin + 6px);
  margin-bottom: 15px;
  line-height: 1.5;
`;

class BlogSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Title> {this.props.title} </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Container>
    );
  }
}

export default BlogSection;
