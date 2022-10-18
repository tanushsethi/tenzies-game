import React from "react";

function Dice(props) {
    return (
        <div className={`dice${props.hold ? " green" : ""}`} onClick={()=>{props.handleDiceClick(props.id)}}>
            <div className={`overlay overlay${props.number}`}></div>
            {/* <h1>{props.number}</h1> */}
        </div>
    )
}

export default Dice;