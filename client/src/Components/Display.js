import "./Display.css";
import React from "react";
import Hint from "./Hint";

export default function Display({ctx, keyPressed, isMul}) {

    return (
        <div className="displayHolder">
            <div className="displayDigitsRow">
                <div className={isMul ? "displayDigit" : "displayDigit2"}>{ctx.a}</div>
                <div className="displayDigit">{isMul ? "\u2022" : "\u2236"}</div>
                <div className="displayDigit">{ctx.b}</div>
                <div className="displayDigit">=</div>
                <div className={
                    (isMul ? "displayDigit2 " : "displayDigit ") +
                    (ctx.match === 1 ? "true" :
                    ctx.match === -1 ? "false" : "null")} >{ctx.r}</div>
            </div>
            <div className="displayHintsRow"><Hint ctx={ctx} keyPressed={keyPressed}/></div>
        </div>
    );
}

