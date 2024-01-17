import React from "react";


const Wagen = () => {
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
                                <div className="wagen__item">
                                    <div className="wagen__buch">
                                        <img src="https://covers.openlibrary.org/b/id/2380224-L.jpg" alt="" className="wagen__buch--img" />
                                    <div className="wagen__buch--info">
                                        <span className="wagen__buch--titel">
                                                Rich Dad Poor Dad
                                        </span>
                                        <span className="wagen__buch--preis">
                                        €10.00
                                        </span>
                                        <button className="wagen__buch--entfernen">
                                            Entfernen
                                        </button>
                                          </div>
                                    </div>
                                    <div className="wagen__menge">
                                        <input type="number" min={0} max={99} className="wagen__input" />
                                    </div>
                                    <div className="wagen__gesamt">
                                    €10.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gesamt">
                            <div className="gesamt__item gesamt__sub-total">
                                <span>Subtotal</span>
                                <span>€9.00</span>
                            </div>
                            <div className="gesamt__item gesamt__steuer">
                                <span>Steuer</span>
                                <span>€1.00</span>
                            </div>
                            <div className="gesamt__item gesamt__preis">
                                <span>Gesamt Preis</span>
                                <span>€1.00</span>
                            </div>
                            <button className="taste taste__checkout no-cursor" onClick={() => alert('Noch nicht Implementiert')}>
                                Fortfahren
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Wagen