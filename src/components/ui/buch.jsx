import React from "react";
import { Link } from "react-router-dom";
import Bewertung from "./Bewertung";
import Preis from "./Preis";


const Buch = ({ buch }) => {

  return (  
    <div className="buch">
      <Link to={`/books/${buch.id}`}>
        <figure className="buch__img--wrapper">
          <img
            src={buch.url}
            alt=""
            className="buch__img"
          />
        </figure>
      </Link>
      <div className="buch__titel">
        <Link to={`/books/${buch.id}`} className="buch__titel--link">
        {buch.title}
        </Link>
      </div>
      <Bewertung bewertung={buch.rating}></Bewertung> 
      <Preis salePreis={buch.salePreis} originalPreis={buch.originalPreis}></Preis>
    </div>
  );
};

export default Buch;
