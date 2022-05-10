import React from "react";
import "./Button.css";

function Button({value, keyPressed}) {

    const pressed = () => {
        keyPressed(value);
    }

    return (
        <div className="buttonHolder">
            <button onClick={pressed}>{value}</button>
        </div>
    );
}

export default Button;
