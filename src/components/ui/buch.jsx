import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buch = ({ buch }) => {
  return (
    <div className="buch">
      <a href="/">
        <figure className="buch__img--wrapper">
          <img
            src={buch.url}
            alt=""
            className="buch__img"
          />
        </figure>
      </a>
      <div className="buch__titel">
        <a href="/" className="buch__titel--link">
        {buch.title}
        </a>
      </div>
      <div className="buch__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="buch__preis">
        {
        buch.salePreis ? ( <><span className="buch__preis--normal">{buch.originalPreis.toFixed(2)}</span> {buch.salePreis.toFixed(2)}</>) : ( <>${buch.originalPreis.toFixed(2)}</>)
        }
      </div>
    </div>
  );
};

export default Buch;
