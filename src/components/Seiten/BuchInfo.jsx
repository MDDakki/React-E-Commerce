import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bewertung from "../ui/Bewertung";
import Preis from "../ui/Preis";
import Buch from "../ui/buch";

const BuchInfo = ({ books }) => {
    const { id } = useParams()
    const buch = books.find(buch => +buch.id === +id) // convertiert buch.id von string nach nummer mit den + symbol am anfang.

    return (
        <div className="bucher__body">
            <main id="bucher__main">
                <div className="bucher__container">
                    <div className="row">
                        <div className="buch__selected--top">
                        <Link to="/books" className="buch__link">
                            <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                        </Link>
                        <Link to="/books"><h2 className="buch__selected--top">Bücher</h2>
                        </Link>
                        </div>  
                        <div className="buch__selected">
                            <figure className="buch__selected--figure">
                                <img src={buch.url} alt="" className="buch__selected--img" />
                            </figure>
                            <div className="buch__selected--description">
                                <h2 className="buch__selected--titel">{buch.title}</h2>
                                <Bewertung  bewertung={buch.rating}/>
                                <div className="buch__preis">
                                    <Preis salePreis={buch.salePreis} originalPreis={buch.originalPreis}></Preis>
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
                <div className="bucher__container">
                    <div className="row">
                        <div className="bucher__selected--top">
                            <h2 className="buch__selected--titel--top">
                              empfohlene Bücher
                            </h2>
                        </div>
                        <div className="bucher">
                        {
                             // Filtert Bücher mit einer Bewertung von 5 und einer unterschiedlichen ID als das aktuelle Buch
                            books
                            .filter(buch => buch.rating === 5 && +buch.id !== +id) // + symbol to conve rt from string to nummer 
                            // Begrenzt die Anzahl der bucher (4)
                            .slice(0, 4) 
                            // Mapt über die gefilterten Bücher und rendert jedes Buch mit der Buch Komponent
                            .map(buch => <Buch buch={buch} key={buch.id} />)
                        }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BuchInfo