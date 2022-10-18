import React from "react";
import dataArray from "../data";
import Dice from "./Dice";
import Footer from "./Footer"
import Confetti from "react-confetti"

function Game() {

    // const[time , setTime] = React.useState({
    //     second:0,
    //     minute:0
    // });
    const [dataState, setDataState] = React.useState(dataArray);
    const [win, setWin] = React.useState(false);

    React.useEffect(()=>{
        // startTimer();
        handleRoll();
    }, []);



    // function startTimer(){
    //     var timer = setInterval(() => {
    //         setTime((currentTime) => {
    //             var newObj = { ...currentTime };
    //             newObj.second++;
    //             if (newObj.second === 59) {
    //                 newObj.minute++;
    //                 newObj.second = 0;
    //             }
    //             return newObj
    //         })
    //     }, 1000);
    // };

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
        // startTimer();
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
        {/* <div>{time.minute}:{time.second}</div> */}
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