import "./Display.css";
import React from "react";
import Hint from "./Hint";

function Display({ctx,keyPressed}) {

    return (
        <div className="displayHolder">
            <div className="displayDigitsRow">
                <div className="displayDigit">{ctx.a}</div>
                <div className="displayDigit">X</div>
                <div className="displayDigit">{ctx.b}</div>
                <div className="displayDigit">=</div>
                <div className={ctx.match === 1 ? "displayDigit2 true" : ctx.match === -1 ? "displayDigit2 false" : "displayDigit2 null"} >{ctx.r}</div>
            </div>
            <div className="displayHintsRow"><Hint ctx={ctx} keyPressed={keyPressed}/></div>
        </div>
    );
}

export default Display;
