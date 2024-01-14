import React from "react";
import Highlights from "../highlights";
import Rabatt from "../Rabatt";
import Entdeken from "../Entdeken";
import Main from "../main";
import Featured from "../Vorgestellt";

const Home = () => {
    return (
        <>
        <Main></Main>
        <Highlights></Highlights>
        <Featured></Featured>
        <Rabatt></Rabatt>
        <Entdeken></Entdeken>
        </>
    )
}

export default Home