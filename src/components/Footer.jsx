import React from "react";
import Logo from "../assets/Library.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="" className="footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">Über</span>
                        <Link to="/books" className="footer__link">Bücher</Link>
                        <Link to="/wagen" className="footer__link">Wagen</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright © 2024 🤫🤫
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer