import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Bewertung = ({ bewertung }) => {
    return (
        <div className="buch__ratings">
        {
            // Erstellt ein Array von FontAwesomeIcons based on the Wert der Bewertung
          new Array(Math.floor(bewertung)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
        }
        {
           // Überprüft ob die Bewertung eine Dezimalzahl ist und dann zeigt es einen halben Stern an 
          !Number.isInteger(bewertung) && <FontAwesomeIcon icon="star-half-alt" />
        }
      </div>
    )
}

export default Bewertung