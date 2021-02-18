import React from "react";
import { colors, fonts, mediaQueries } from "../shared/config";

import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";
import matcha from "../images/matcha-latte.PNG";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import DotDivider from "../components/DotDivider";
import Header from "../components/Header";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

function ArticleExample() {
  return (
    <Container>
      <BlogHeader
        img={matcha}
        title="How I Make Matcha Lattes"
        date="October 23, 2020"
      />
      <BlogSection title="Subsection" />
      <BlogSection title="Subsection" />
      <DotDivider />
      <BlogSection title="Subsection" />
    </Container>
  );
}

export default ArticleExample;
