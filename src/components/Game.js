import React from "react";
import dataArray from "../data";
import Dice from "./Dice";
import Footer from "./Footer"
import Confetti from "react-confetti"

function Game() {

    const [dataState, setDataState] = React.useState(dataArray);
    const [win, setWin] = React.useState(false);

    React.useEffect(()=>{
        handleRoll();
    }, []);

    function checkState(){
        var win = true;
        var num = dataState[0].number;
        dataState.forEach((item)=>{
            if(item.number !== num){
                win = false;
            }
        });
        return win;
    }

    function handleDiceClick(id){
        setDataState((oldState) => {
            return oldState.map((item)=>{
                return item.id === id ? {...item, hold: !item.hold}: item;
            });
        });
        if (checkState()){
            setWin(true);
        }
    }

    function handleRoll(){
        setDataState((oldState) => {
            return oldState.map((item) => {
                return item.hold ? item : { ...item, number: Math.floor(Math.random() * 6) + 1};
            });
        });
    }

    function handleRestart(){
        setDataState((oldState) => {
            return oldState.map((item) => {
                return { ...item, number: Math.floor(Math.random() * 6) + 1 , hold: false};
            });
        });
        setWin(false);
    }

    var elementArray = dataState.map((diceObject)=>{
        return <Dice
                    {...diceObject}
                    handleDiceClick={handleDiceClick}
                />
    });

    return (
        <>
        {win && <Confetti />}
        <div className="Game">
            {elementArray}
            
        </div>
        <Footer 
                win= {win}
                handleRoll={handleRoll}
                handleRestart={handleRestart}
            />
        </>
    )
}

export default Game;