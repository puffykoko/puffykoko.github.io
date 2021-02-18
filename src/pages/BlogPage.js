import React from "react";
import { colors, fonts, mediaQueries } from "../shared/config";

import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";
import matcha from "../images/matcha-latte.PNG";
import Header from "../components/Header";

const Container = styled("div")`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled("div")`
  box-sizing: border-box;
  padding: 0 15px;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
`;

function BlogPage() {
  return (
    <Container>
      <InnerContainer>
        <ArticleCard
          color={colors.lightyellow}
          title="title"
          extension="post1"
          img={matcha}
        />
        <ArticleCard
          color={colors.lightyellow}
          title="title"
          extension="post1"
          img={matcha}
        />
        <ArticleCard
          color={colors.lightyellow}
          title="title"
          extension="post1"
          img={matcha}
        />
        <ArticleCard
          color={colors.lightyellow}
          title="title"
          extension="post1"
          img={matcha}
        />
      </InnerContainer>
    </Container>
  );
}

export default BlogPage;
/*
<div className={classes}>
  <NavLink to = "/" exact activeClassName="active" className="Link">
    About
  </NavLink>
  <NavLink to="/team/" activeClassName="active" className="Link">
    Team
  </NavLink>
  <NavLink to = "/sponsors/" activeClassName="active" className="Link">
  Sponsors
  </NavLink>
  <NavLink to = "/apply/" activeClassName="active" className={applyStyle}>
  Apply
  </NavLink>
</div>
*/
