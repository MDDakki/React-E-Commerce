import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Bewertung from "./Bewertung";
import Preis from "./Preis";


const Buch = ({ buch }) => {
  const [img, setImg] = useState()  

  const MountRef = useRef() // similiar to usestate / wenn der komponent sich ändert das ganze komponent ändert sich nicht wie usestate
  
  useEffect(() => {
    const image = new Image()
    image.src = buch.url
    image.onload = () => {
      setImg(image) 
    }
    return () => {
      MountRef.current = false 
    }
  })

  return (  
    <div className="buch">  
    {
      img ? 
      <>
         <Link to={`/books/${buch.id}`}>
        <figure className="buch__img--wrapper">
          <img
            src={img.src}
            alt=""
            className="buch__img"
          />
        </figure>
      </Link>
      <div className="buch__titel">
        <Link to={`/books/${buch.id}`} className="buch__titel--link">
        {buch.title}
        </Link>
      </div>
      <Bewertung bewertung={buch.rating}></Bewertung> 
      <Preis salePreis={buch.salePreis} originalPreis={buch.originalPreis}></Preis>
      </>
    : (<>
    <div className="buch__img--skelet"></div>
    <div className="skelet buch__titel--skelet"></div>
    <div className="skelet buch__rating--skelet"></div>
    <div className="skelet buch__preis--skelet"></div>
    </>)}
    </div>
  );
};

export default Buch;
