import { Link } from "gatsby";
import * as React from "react";
import "./styles/Navbar.scss";
import navigations from "./navigations";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AiOutlineMenu } from "react-icons/ai";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = ({ currentPage }) => {
  const getClass = (title, name) => {
    return currentPage.toLowerCase() == title.toLowerCase()
      ? `${name} selected-${name}`
      : `${name}`;
  };

  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const handleScroll = () => {
        setHasScrolled(window.scrollY > 50);
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const isLandscape = useMediaQuery("(min-width: 900px)");

  return (
    <div
      className="nav"
      style={hasScrolled ? { backgroundColor: "#050505ea" } : {}}
    >
      <Link to="/" className="brandContainer">
        <img src={logo} className="logo" alt="illuminate logo" />
        <div>UNSW Illuminate</div>
      </Link>
      {!isLandscape ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <AiOutlineMenu size="1.8em" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content>
              <motion.div
                className="dropdownMenu"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {navigations.map((nav, index) => (
                  <Link
                    to={nav.link}
                    className={getClass(nav.title, "link")}
                    style={{ width: "100%" }}
                    key={index}
                  >
                    <DropdownMenu.Item
                      style={{ width: "100%", color: "inherit" }}
                    >
                      {nav.title}
                    </DropdownMenu.Item>
                  </Link>
                ))}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
