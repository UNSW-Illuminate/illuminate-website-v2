import { Link } from "gatsby";
import * as React from "react";
import "./styles/Navbar.scss";
import navigations from "./nagivations";
import logo from '../../images/logo.png'

const Navbar = () => {

  return (
    <div className="nav">
      <Link to="/" className="brandContainer">
        <img src={logo} className="logo" alt="illuminate logo" />
        <div>UNSW Illuminate</div>
      </Link>
      <ul className="menuContainer">
        {navigations.map((nav, index) => (
          <li key={index}>
            <Link to={nav.link} className="link">
              <span className="inner">
                <span className="normal ">{nav.title}</span>
                <span className="hover">{nav.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;