import React from "react";

const Preis = ({ salePreis, originalPreis }) => {   
    return (
        <div className="buch__preis">
            {
                // checkt ob es einen sale Preis gibt
                salePreis ? (
                    // Wenn ein salePreis gibt, wird das Originalpreis durchgestrichen und den salePreis normal gezeigt
                    <> 
                        <span className="buch__preis--normal">€{originalPreis.toFixed(2)}</span> €{salePreis.toFixed(2)}
                    </>
                ) : (
                    // Wenn es kein  salePreis gibt, zeigt es nur den Originalpreis
                    // // toFixed() wird verwendet um die Anzahl der Dezimalstellen einer Dezimalzahl zu begrenzen.
                    <> 
                        €{originalPreis.toFixed(2)} 
                    </>
                )
            }
        </div>
    );
}

// Exportiere die Preis-Komponente als Standardexport
export default Preis;
