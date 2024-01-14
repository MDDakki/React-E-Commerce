import React from "react";
import Logo from "../assets/Library.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="" className="footer__logo--img" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/home" className="footer__link">Home</a>
                        <span className="footer__link no-cursor">Über</span>
                        <a href="/books" className="footer__link">Bücher</a>
                        <a href="/wagen" className="footer__link">Wagen</a>
                    </div>
                    <div className="footer__copyright">
                        Copyright © 2024 Bibliothek
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer