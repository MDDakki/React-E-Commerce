import React, { useState } from 'react';
import Buch from '../ui/buch';

const Books = ({ books: initBuch }) => {
    const [books, setBooks] = useState(initBuch)

    function FilterBucher(filter) {
        if (filter === "absteigend") {
         setBooks(books.slice().sort((a,b) => (a.salePreis || a.originalPreis) - (b.salePreis || b.originalPreis)))   
        }
        if (filter === "hochsteigend") {
            setBooks(books.slice().sort((a, b) => (b.salePreis || b.originalPreis) - (a.salePreis || a.originalPreis)))   
        }
        if (filter === "Bewertung") {
            setBooks(books.slice().sort((a, b) => (b.rating - a.rating)))
        }
    }

    return (
        <div id='bucher__body'>
            <main id="bucher__main">
                <section className='bucher__container'>
                    <div className="row">
                        <div className="bucher__header">
                            <h2 className='section__titel bucher__header--titel'>Alle Bücher</h2>
                            <select name="" id="filter" defaultValue="Default" onChange={(event) => FilterBucher(event.target.value)}>
                                <option value="Default" disabled>Sortiern</option>
                                <option value="hochsteigend">Preis, hochsteigend</option>
                                <option value="absteigend">Preis, absteigend</option>
                                <option value="Bewertung">Bewertung</option>
                            </select>
                        </div>
                        <div className="bucher">
                            {books.map((buch) => (
                                <Buch buch={buch} key={buch.id}></Buch>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Books; 