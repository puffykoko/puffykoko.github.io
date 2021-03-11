import React from "react";

import styled, { keyframes } from "styled-components";
import { colors, fonts, mediaQueries } from "../shared/config";

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%, 100%{
    transform: rotate(360deg);
  }
 
`;

const bounce = keyframes`
  0%,
  80% {
    transform: translate(0,0);
  }
  20%{
    transform: scale(1.1, 0.95);
  }
  50% {
    transform: translate(0, -100px);
  }
`;

const bounce1 = keyframes`
   0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-100px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }`;

  
        
        const shadow = keyframes`
        0%, 10%{

        }
        30%{
          transform: scaleX(.5);
        }
        50%, 100% {
          transform: scaleX(1.0);
        };`

const Container = styled("div")`
  position: relative;
  width: 90px;
  height: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;


`;

const Body = styled("div")`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  z-index: 1;

  box-shadow: 0px 2.5px 2px rgba(30, 30, 30, 0.3);
    animation: ${bounce1} 4s ease infinite;
  
`;

const blink = keyframes`
  0%,
  100% {
    transform: scale(1, 0.05);
  }
  2.5%,
  97.5% {
    transform: scale(1, 1);
  }
`;

const Eye = styled("div")`
  width: 17px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  animation: ${blink} ${(props) => props.blinkTime} infinite;
`;

const Pupil = styled("div")`
  width: 11px;
  height: 9px;
  border-radius: 50%;
  background-color: black;
  position: relative;
  top: 5px;
  left: 3px;
`;

const Shadow = styled("div")`
  width: 80px;
  height: 10px;
  border-radius: 50%;
  background-color: #E9DCBA;
  margin-top: -5px;
  animation: ${shadow} 4s infinite;
 
`;


class Ball extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container jumpDelay={this.props.jumpDelay}>
        <Body color={this.props.color}>
          <Eye
            style={{ top: "25px", left: this.props.leftEye }}
            blinkTime={this.props.blinkTime}
          >
            <Pupil></Pupil>
          </Eye>
          <Eye
            style={{ top: "25px", left: this.props.rightEye }}
            blinkTime={this.props.blinkTime}
          >
            <Pupil></Pupil>
          </Eye>
        </Body>
        <Shadow></Shadow>
      </Container>
    );
  }
}

export default Ball;
