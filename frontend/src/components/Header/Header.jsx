import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { mainLogo } from "../../assets";

const Header = () => {
  const [active, setActive] = useState("/home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `header__Container nav__container ${
    isScrolled ? "scrolled" : ""
  }`;
  return (
    <nav className={navbarClasses}>
      <ul className="nav__links">
        <li>
          <Link
            to="/home"
            className={`${
              active === "/home" ? "active__link" : "nav__other-links"
            }`}
            onClick={() => setActive("/home")}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/pages"
            className={`${
              active === "/pages" ? "active__link" : "nav__other-links"
            }`}
            onClick={() => setActive("/pages")}
          >
            PAGES
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="nav__myLogo"
            onClick={() => {
              setActive("/home");
              window.scrollTo(0, 0);
            }}
          >
            <img src={mainLogo} alt="mainLogo" />
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`${
              active === "/blog" ? "active__link" : "nav__other-links"
            }`}
            onClick={() => setActive("/blog")}
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className={`${
              active === "/shop" ? "active__link" : "nav__other-links"
            }`}
            onClick={() => setActive("/shop")}
          >
            SHOP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
