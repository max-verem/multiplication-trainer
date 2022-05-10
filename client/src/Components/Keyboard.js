import "./Keyboard.css";
import React from "react";
import Button from "./Button";

function Keyboard({keyPressed}) {

    const keys = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#'],
    ];

    return (
        <div className="keyboardHolder">
            {keys.map((keys_row, index1) => { return (
                <div className="keyboardRow" key={index1.toString()}>
                    {keys_row.map((val,index2) => {
                        return (<Button key={index2.toString()} value={val} keyPressed={keyPressed}/>)})
                    }
                </div>
            )})}
        </div>
    );
}

export default Keyboard;
