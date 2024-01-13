import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="">
                    <img src="" alt="" className="logo" />
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
                </ul>
            </div>
        </nav>
    )
}

export default NavBar