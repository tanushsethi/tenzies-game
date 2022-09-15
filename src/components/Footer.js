import React from "react";

function Footer(props) {
    return (
        <div className="Footer">
            <button onClick={props.win ? props.handleRestart : props.handleRoll}>{props.win ? "Restart" : "Roll"}</button>
        </div>
    )
}

export default Footer;