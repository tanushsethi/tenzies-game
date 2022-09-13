import React from "react";
import Header from "./Header"
import Game from "./Game"
import Footer from "./Footer"

function MainCon(){
    return(
        <div className="MainCon">
            <Header/>
            <Game/>
            <Footer/>
        </div>
    );
}

export default MainCon;
