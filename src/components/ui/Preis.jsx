import React from "react";

const Preis = ({salePreis, originalPreis}) => {   
    return (
        <div className="buch__preis">
        {
        salePreis ? (<> <span className="buch__preis--normal">€{originalPreis.toFixed(2)}</span> €{salePreis.toFixed(2)} </>) : (<> €{originalPreis.toFixed(2)} </>)
        }
      </div>
    )
}

export default Preis