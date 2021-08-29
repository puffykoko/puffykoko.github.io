import React from "react";
import "./LandingPage.css";
import Ball from "../components/Ball";
import styled from "styled-components";
import { colors, fonts, mediaQueries } from "../shared/config";
import balls from "../images/balls.PNG";
import Fade from "react-reveal/Fade";
import SideNav from "../components/SideNav";
import NameBar from "../components/NameBar";
import matcha from "../images/matcha-latte.PNG";
import linkedin from "../images/linkedin.svg";
import mail from "../images/mail.svg";

const { tablet } = mediaQueries;
const { mobile } = mediaQueries;
/*

*/

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${colors.lightyellow};
  overflow-x: hidden;
`;

const SectionOne = styled("div")`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.lightyellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;

  box-sizing: border-box;
`;

const MainText = styled("div")`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-bottom: 20px;
  margin-top: 40px;
  letter-spacing: 2px;
  

  ${tablet} {
    font-size: 27px;
  }

  ${mobile} {
    font-size: 25px;
  }
`;

const SubText = styled("div")`
  text-align: center;
  font-size: 18px;
  letter-spacing: 2px;
  color: ${colors.primarygrey};


  ${tablet} {
    font-size: 18px;
  }

  ${mobile} {
    font-size: 15px;
  }
`;

const Name = styled("div")`
  //positioning
  transform: rotate(-90deg);
  display: inline-block;
  position: fixed;
  top: 45vh;
  left: -20px;
  //font
  font-size: 20px;
  font-weight: 600;
  color: ${colors.primarygrey};
  letter-spacing: 5px;
`;

const Balls = styled("div")`
  display: flex;
  width: 285px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const SectionTwo = styled("div")`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.lightyellow};
  display: flex;
`;

const Blurb = styled("div")`
  width: 35%;
  max-width: 500px;
  position: absolute;
  left: 25%;
  padding-top: 20vh;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 10vh;

  ${tablet} {
    font-size: 17px;
    font-weight: 400;
  }
`;

const CategoryContainer = styled("div")`
  display: flex;
`;

const Circle = styled("div")`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: orange;
  margin-right: 10px;
`;

const Category = styled("div")`
  font-size: 17px;
  color: ${colors.primarygrey};
  letter-spacing: 1px;
  font-weight: 500;
  text-align: left;
`;

const Contact = styled("div")`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin-top: 70px;
`;

/*
 */

function LandingPage() {
  return (
    <Container>
      <SectionOne>
       
          <Ball
            color={colors.red}
            leftEye="30px"
            rightEye="35px"
            blinkTime="7s"
            jumpDelay="5s"
          />
  
        <MainText>matthew ko
        </MainText>
        <SubText>
        design, development,
        </SubText>
        <SubText>
        fish, plants,
        </SubText>
        <SubText>
        guitar, tea
        </SubText>
        <div style={{marginTop: "20px"}}>
        <SubText>
        [on a break]
        </SubText>
        </div>
        <div style={{marginTop: "20px"}}>
      <Contact>
       
        <a href="mailto:mk9917@yahoo.com?">
        <img src={mail} width ="30px" height="30px"></img>
        </a>
        <a href="https://www.linkedin.com/in/matthew-m-ko/">
        <img src={linkedin} width ="30px" height="30px"></img>
        </a>
      </Contact>
      </div>
       
      </SectionOne>
    </Container>
  );
}

export default LandingPage;

/*<Balls>
          <Ball
            color={colors.red}
            leftEye="30px"
            rightEye="35px"
            blinkTime="7s"
            jumpDelay="5s"
          />
          <Ball
            color={colors.orange}
            leftEye="15px"
            rightEye="20px"
            blinkTime="5s"
            jumpDelay="10s"
          />
          <Ball
            color={colors.blue}
            leftEye="10px"
            rightEye="15px"
            blinkTime="10s"
            jumpDelay="15s"
          />
        </Balls>
        
          <MainText>Hi, I'm Matthew.</MainText>
        <SubText>
          I’m a software developer, passionate about creating meaningful digital
          experiences through engineering and design.
        </SubText>*/
