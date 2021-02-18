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
  box-sizing: border-box;
  width: 10%;
  height: 100vh;
  padding: 15px;
  padding-top: 20vh;
  position: absolute;
  text-align: left;
  letter-spacing: 1px;
  font-size: 15px;
  left: 0;
`;

class NameBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container>matthew ko</Container>;
  }
}

export default NameBar;
