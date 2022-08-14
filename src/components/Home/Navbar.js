import { Link } from "gatsby";
import * as React from "react";
import "./styles/Navbar.scss";
import navigations from "./nagivations";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";

// TODO: make header sticky with background onscroll
const Navbar = ({ currentPage }) => {
  const getClass = (title, name) => {
    return currentPage.toLowerCase() == title.toLowerCase()
      ? `${name} selected-${name}`
      : `${name}`;
  };

  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="nav"
      style={hasScrolled ? { backgroundColor: "#050505ea" } : {}}
    >
      <Link to="/" className="brandContainer">
        <img src={logo} className="logo" alt="illuminate logo" />
        <div>UNSW Illuminate</div>
      </Link>
      <div className="navLinkWrapper">
        <ul>
          {navigations.map((nav, index) => (
            <li key={index}>
              <Link to={nav.link} className={getClass(nav.title, "link")}>
                <span className="inner">
                  <span className={getClass(nav.title, "normal")}>
                    {nav.title}
                  </span>
                  <span className={getClass(nav.title, "hover")}>
                    {nav.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
