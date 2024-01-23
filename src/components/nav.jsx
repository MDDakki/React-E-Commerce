import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BibLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const NavBar = ({Anzahl}) => {
  function OpenMenu() {
    document.body.classList += " menu--open"
  }

  function Closemenu() {
    document.body.classList.remove("menu--open")
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="">
          <img src={BibLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__liste">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Bücher
            </Link>
          </li>
          <button className="taste__menu" onClick={OpenMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">  
            <Link to="/Wagen" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
            </Link>
            {
              Anzahl > 0 && <span className="wagen__length">{Anzahl}</span>
            }
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="taste__menu taste__menu--close" onClick={Closemenu}>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/bucher" className="menu__link">
                Bücher
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/Wagen" className="menu__link">
                Wagen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
