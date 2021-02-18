import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { colors, fonts, mediaQueries } from "../shared/config";
import matcha from "../images/matcha-latte.PNG";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const { tablet } = mediaQueries;
const { mobile } = mediaQueries;

const Container = styled("div")`
  box-sizing: border-box;
  width: 30%;
  min-width: 200px;
  padding: 15px;
  padding-top: 0;
  position: absolute;
  text-align: left;
  letter-spacing: 1px;
  font-size: 13px;
  right: 0;
  overflow-x: hidden;

  ${tablet} {
    font-size: 12px;
    font-weight: 400;
  }

  ${mobile} {
    font-size: 15px;
    font-weight: 400;
    left: 0;
    padding: 0;
    margin-top: 50px;
    position: relative;
  }
`;

const Category = styled("div")`
  font-size: 17px;
  color: ${colors.primarygrey};
  letter-spacing: 1px;
  font-weight: 500;
`;

const ProjectLink = styled("div")`
  margin: 15px 0;
  transition: transform 0.5s;

  &:hover {
    transform: translateX(20px);
  }
`;

const Section = styled("div")`
  margin-bottom: 50px;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div>
          <Fade>
            <Section>
              <Category>Misc</Category>
              <ProjectLink>On My Gap Year</ProjectLink>
              <ProjectLink>Matcha Lattes</ProjectLink>
            </Section>
          </Fade>
        </div>
      </Container>
    );
  }
}

export default SideNav;
