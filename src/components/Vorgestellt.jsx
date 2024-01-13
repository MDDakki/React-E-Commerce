import React from "react";
import Buch from "./ui/buch";
import { books } from "../data"

const Featured = () => {

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                <h2 className="section__titel"> Vorgestellte <span className="purple">Bücher</span> </h2>
                    <div className="bucher">
                    {books.filter((buch) => buch.rating === 5).slice(0, 4 ).map(buch => <Buch buch={buch} key={buch.id}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured 