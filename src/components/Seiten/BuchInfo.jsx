import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bewertung from "../ui/Bewertung";
import Preis from "../ui/Preis";

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
                        <Link to="/books"><h2 className="buch__selected--titel--top">Bücher</h2>
                        </Link>
                        </div>  
                        <div className="buch__selected">
                            <figure className="buch__selected--figure">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="buch__selected--img" />
                            </figure>
                            <div className="buch__selected--description">
                                <h2 className="buch__selected--titel">Crack The Coding Interview</h2>
                                <Bewertung  bewertung="4.5"/>
                                <div className="buch__preis">
                                    <Preis salePreis={20} originalPreis={50}></Preis>
                                </div>
                                <div className="buch__zusammenfassung">
                                    <h3 className="buch__zusammenfassung--titel">
                                        Zusammenfassung
                                    </h3>
                                    <p className="buch__zusammenfassung--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero consequatur quas, eveniet explicabo numquam voluptates culpa qui a delectus fugit illum earum asperiores quo placeat eos! Architecto facilis veritatis dolor? Tenetur qui enim necessitatibus consectetur quas quaerat, ratione totam!
                                    </p>
                                    <p className="buch__zusammenfassung--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis quia distinctio in dicta repellendus, cum deleniti praesentium explicabo odio, nesciunt numquam blanditiis? Ab quisquam in esse at, quidem soluta quam, voluptatibus consequatur quaerat fugit error, mollitia reprehenderit quis expedita!
                                    </p>
                                </div>
                                <button className="taste">
                                      in den Einkaufswagen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuchInfo