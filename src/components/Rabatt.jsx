import React from "react";
import { books } from "../data"
import Buch from "./ui/buch";

const Rabatt = () => {
    return (
        <section id="Rabatt">
            <div className="container">
                <div className="row">
                    <h2 className="section__titel">
                        Ermäßigte <span className="purple">Bücher</span>
                    </h2>
                    <div className="bucher">
                        {books.filter(buch => buch.salePreis > 0).slice(0,8).map(buch => (<Buch buch={buch} key={buch.id} />))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Rabatt
