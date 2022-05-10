import React from "react";
import "./Hint.css";

function Hint({ ctx, keyPressed }) {

    const pressed = () => {
        keyPressed('?');
    }

    return (
        <div className="hintHolder" onClick={pressed}>
            {ctx.hint ? ctx.m : "?"}
        </div>
    );
}

export default Hint;
