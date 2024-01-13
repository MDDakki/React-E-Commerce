import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BibLogo from "../assets/Library.svg";

const NavBar = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="">
          <img src={BibLogo} alt="" className="logo" />
        </a>
        <ul className="nav__liste">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Bücher
            </a>
          </li>
          <button className="taste__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/Wagen" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
            </a>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="taste__menu taste__menu--close">
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/bucher" className="menu__link">
                Bücher
              </a>
            </li>
            <li className="menu__list">
              <a href="/Wagen" className="menu__link">
                Wagen
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
