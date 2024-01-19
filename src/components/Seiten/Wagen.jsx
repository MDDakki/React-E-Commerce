import React from "react";
import LehrWagen from "./img/empty_cart.svg"
import { Link } from "react-router-dom";

const Wagen = ({wagen, MengeAnpassen, BuchEntfernen}) => {

    const gesamt = () => {
        let preis = 0
        wagen.forEach((buch) => {
            preis += +((buch.salePreis || buch.originalPreis) * buch.menge)
        })
        return preis
    }

    return (
        <div id="bucher__body">
            <main id="bucher__main">
                <div className="bucher__container">
                    <div className="row">
                        <div className="buch__selected--top">
                            <h2 className="wagen__titel">Wagen</h2>
                        </div>
                        <div className="wagen">
                            <div className="wagen__header">
                                <div className="wagen__buch">Buch</div>
                                <div className="wagen__menge">Menge</div>
                                <div className="wagen__gesamt">Preis</div>
                            </div>
                            <div className="wagen__body">
                                { wagen.map((buch, index) => {
                                        return (
                                            <div key={index} className="wagen__item">
                                            <div className="wagen__buch">
                                                <img src={buch.url} alt="" className="wagen__buch--img" />
                                            <div className="wagen__buch--info"> 
                                                <span className="wagen__buch--titel">
                                                        {buch.title}
                                                </span>
                                                <span className="wagen__buch--preis">
                                                €{(buch.salePreis || buch.originalPreis).toFixed(2)}
                                                </span>
                                                <button className="wagen__buch--entfernen" onClick={() => BuchEntfernen(buch)}>
                                                    Entfernen
                                                </button>
                                                  </div>
                                            </div>
                                            <div className="wagen__menge">
                                                <input type="number" value={buch.menge} min={0} max={99} onChange={(event) => MengeAnpassen(buch, event.target.value)} className="wagen__input" />
                                            </div>
                                            <div className="wagen__gesamt">
                                            €{((buch.salePreis || buch.originalPreis) * buch.menge).toFixed(2)}
                                            </div>
                                        </div>
                                        )
                                    })
                                }    
                                </div>
                                {
                                wagen.length === 0 &&
                                <div className="wagen__lehr">
                                    <img src={LehrWagen} alt="" className="wagen__lehr--img" />
                                    <h2>Sie haben keine Bücher in Ihrem Warenkorb</h2>
                                    <Link to="/books">
                                        <button className="taste">Bücher durchsuchen</button>
                                    </Link>
                                </div>}
                        </div>
                       {wagen.length > 0 && <div className="gesamt">
                            <div className="gesamt__item gesamt__sub-total">
                                <span>Subtotal</span>
                                <span>€{(gesamt() * 0.9).toFixed(2)}</span>
                            </div>
                            <div className="gesamt__item gesamt__steuer">
                                <span>Steuer</span>
                                <span>€{(gesamt() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="gesamt__item gesamt__preis">
                                <span>Gesamt Preis</span>
                                <span>€{gesamt().toFixed(2)}</span>
                            </div>
                            <button className="taste taste__checkout no-cursor" onClick={() => alert('Noch nicht Implementiert')}>
                                Fortfahren
                            </button>
                        </div>}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Wagen    