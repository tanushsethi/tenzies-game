import React from "react";
import dataArray from "../data";
import Dice from "./Dice";

function Game() {

    const [dataState, setDataState] = React.useState([]);

    React.useEffect(()=>{
        setDataState((oldState)=>{
            return dataArray;
        })
    }, []);

    var elementArray = dataState.map((diceObject)=>{
        return <Dice
                    number = {diceObject.number}
                />
    });

    return (
        <div className="Game">
            {elementArray}
        </div>
    )
}

export default Game;