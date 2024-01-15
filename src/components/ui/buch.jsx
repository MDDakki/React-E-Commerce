import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Bewertung from "./Bewertung";

const Buch = ({ buch }) => {

  return (  
    <div className="buch">
      <Link to="/">
        <figure className="buch__img--wrapper">
          <img
            src={buch.url}
            alt=""
            className="buch__img"
          />
        </figure>
      </Link>
      <div className="buch__titel">
        <Link to="/" className="buch__titel--link">
        {buch.title}
        </Link>
      </div>
      <Bewertung bewertung={buch.rating}></Bewertung>
      <div className="buch__preis">
        {
        buch.salePreis ? (<> <span className="buch__preis--normal">€{buch.originalPreis.toFixed(2)}</span> €{buch.salePreis.toFixed(2)} </>) : (<> €{buch.originalPreis.toFixed(2)} </>)
        }
      </div>
    </div>
  );
};

export default Buch;
