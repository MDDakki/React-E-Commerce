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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Wagen