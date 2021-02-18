import React from 'react';
import './About.css';

function About() {
  return (

      <div className="AboutContainer">
        <div className="AboutText">
        <p>hi there, </p>
        <p style = {{color:"#525252",fontWeight:"bold"}}>I’m Matthew.</p>
        <p>I’m a student studying Computer Science at UCLA, but I'm currently taking a  <p style={{color:"#525252",display: "inline", fontWeight: "bold"}}>gap year.</p></p>
        <p>I’m interested in
          <p style={{color:"#DB52A4",display: "inline", fontWeight: "bold"}}> design</p>,
          <p style={{color:"#41C8E5",display: "inline", fontWeight: "bold"}}> frontend development</p>, and making
          <p style={{color:"#F6A55A",display: "inline", fontWeight: "bold"}}> animations.</p>
        </p>
        <p>Oh, and <a href="https://www.instagram.com/boyandhisfish/?hl=en" style={{textDecoration:"none",color:"#525252",display: "inline", fontWeight: "bold"}}>I love fish.</a></p>
        <p>Look around to see what I’m up to and things I’ve made!</p>
        </div>
      </div>

  );
}

export default About;
