import React from "react";
import { Link } from "react-router-dom";

const Entdeken = () => {
    return (
        <section id="Entdeken">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        mehr <span className="purple">Bücher</span> entdeken
                    </h2>
                    <Link to="/books">
                        <button className="taste">Bücher entdeken</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Entdeken