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
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;

const InnerContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 45px;
`;

const Circle = styled("div")`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

class DotDivider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <Circle color={colors.blue}></Circle>
          <Circle color={colors.red}></Circle>
          <Circle color={colors.yellow}></Circle>
        </InnerContainer>
      </Container>
    );
  }
}

export default DotDivider;
