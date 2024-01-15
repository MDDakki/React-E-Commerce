import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bewertung from "../ui/Bewertung";

const BuchInfo = ({ books }) => {
    return (
        <div className="bucher__body">
            <div className="bucher__main">
                <div className="bucher__container">
                    <div className="row">
                        <div className="buch__selected--top">
                        <Link to="/books" className="buch__link">
                            <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                        </Link>
                        <Link to="/book"><h2 className="buch__selected--titel--top">Bücher</h2>
                        </Link>
                        </div>  
                        <div className="buch__selected">
                            <figure className="buch__selected--figure">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="buch__selected--img" />
                            </figure>
                            <div className="buch__selected--description">
                                <h2 className="buch__selected--titel">Crack The Coding Interview</h2>
                                <Bewertung  bewertung="4.5"/>
                                <div className="buch__preis"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuchInfo