import React from "react";

function Dice(props) {
    return (
        <div className="dice">
            <h1>{props.number}</h1>
        </div>
    )
}

export default Dice;