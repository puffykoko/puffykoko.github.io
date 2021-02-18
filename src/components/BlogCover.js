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
`;

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container></Container>;
  }
}

export default BlogHeader;
