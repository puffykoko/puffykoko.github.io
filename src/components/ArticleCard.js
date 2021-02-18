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
  width: 100%;
  padding: 15px;

  ${notMobile} {
    width: 50%;
  }
`;

const InnerContainer = styled("div")`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
`;

const Image = styled("div")`
  width: 100%;
`;

const Title = styled("div")`
  text-align: left;
  font-family: "Roboto";
  color: ${colors.primarygrey};
  font-weight: bold;
  font-size: calc(2vmin + 5px);
  margin-top: 10px;
  letter-spacing: 2.5px;
`;

const Date = styled("div")`
  text-align: left;
  font-family: "Roboto";
  color: ${colors.primarygrey};
  font-weight: bold;
  font-size: calc(2vmin + 1px);
  margin-top: 5px;
  letter-spacing: 2.5px;
`;

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <NavLink
          to={this.props.extension}
          activeClassName="active"
          style={{
            textDecoration: "none",
            color: "#4f4f4f",
          }}
        >
          <InnerContainer color={this.props.color} height={this.props.height}>
            <Image>
              <img style={{ width: "100%" }} src={this.props.img}></img>
            </Image>
          </InnerContainer>
        </NavLink>
        <Title> {this.props.title} </Title>
        <Date> 10.20.2020 </Date>
      </Container>
    );
  }
}

export default ArticleCard;
