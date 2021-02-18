import React from "react";
import "./Header.css";
import "./NavBar.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const classes = this.state.showMenu ? " NavBar Show" : " NavBar";
    const applyStyle = this.state.width < 700 ? "Link" : "Button";

    return (
      <div className="HeaderContainer">
        <NavLink to="/" exact activeClassName="active" className="HeaderTitle">
          matthew ko
        </NavLink>

        <div className="Menu-Icon" onClick={this.toggleMenu}>
          <div className="Bar"> </div>
          <div className="Bar"> </div>
          <div className="Bar"> </div>
        </div>
        <div className={classes}>
          <NavLink
            to="/blog"
            exact
            activeClassName="active"
            className="HeaderNavLink"
          >
            blog
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="active"
            className="HeaderNavLink"
          >
            projects
          </NavLink>
          <NavLink
            to="/resume"
            activeClassName="active"
            className="HeaderNavLink"
          >
            resume
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;

/*
function Header() {
  return (
    <div className="HeaderContainer">
      <h1 className="HeaderTitle">matthew ko</h1>
      <div className="HeaderNavBar">
        <p > blog </p>
        <p className="HeaderNavLink"> projects </p>
        <p className="HeaderNavLink"> resume </p>
      </div>
    </div>
  );
}

export default Header;
*/
