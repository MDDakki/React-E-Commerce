import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Bewertung = ({ bewertung }) => {
    return (
        <div className="buch__ratings">
        {
          new Array(Math.floor(bewertung)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
        }
        {
          !Number.isInteger(bewertung) && <FontAwesomeIcon icon="star-half-alt" />
        }
      </div>
    )
}

export default Bewertung