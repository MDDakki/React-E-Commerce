import React from 'react';

const Books = () => {
    return (
        <div id='bucher__body'>
            <main id="bucher__main">
                <section className='bucher__container'>
                    <div className="row">
                        <div className="bucher__header">
                            <h2 className='section__titel bucher__header--titel'>Alle Bücher</h2>
                            <select name="" id="filter" defaultValue="DEFAULT">
                                <option value="Default" disabled>Sortiern</option>
                                <option value="hochsteigend">Preis, hochsteigend</option>
                                <option value="absteigend">Preis, absteigend</option>
                                <option value="Bewertung">Bewertung</option>
                            </select>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Books; 