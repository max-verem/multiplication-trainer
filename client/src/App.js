//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Keyboard from './Components/Keyboard';
import Display from './Components/Display';

function App() {
    const [ctx, setCtx] = useState({a:0, b:0, r:"", m: "", match: 0, hint:false, busy:false, index:0, list: [] });

    const keyPressed = (v) => {
//    const keyPressed = function(v) {
        console.log("keyPressed: " + v);

///        console.log("keyPressed: ctx.list.length=" + ctx.list.length);

        if(ctx.busy) return;

        if(v === '?')
        {
            setCtx(prevCtx => ({
                ...prevCtx,
                hint: true
            }));
        }
        else if(v === '*' || v === '#')
        {
            setCtx(prevCtx => ({
                ...prevCtx,
                r: "",
                match: 0
            }));
        }
        else
        {
            var res = ctx.r + v;

            setCtx(prevCtx => ({
                ...prevCtx,
                r: res
            }));

            if(res.length === ctx.m.length)
            {
                setCtx(prevCtx => ({
                    ...prevCtx,
                    busy: true,
                    match: (res === ctx.m) ? 1 : -1
                }));

                setTimeout(() => {
                    if(res === ctx.m)
                        setup();
                    else
                        setCtx(prevCtx => ({
                            ...prevCtx,
                            r: "",
                            match: 0,
                            busy: false
                        }));
                }, 1000);
            };
        }
    }

/*
    const rnd = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
*/
    const setup = () => {

///        console.log("setup: ctx.list.length=" + ctx.list.length);

        var i = (ctx.index === ctx.list.length) ? 0 : ctx.index;

        console.log( ctx.list[i] );

        var
            A = ctx.list[i].a,
            B = ctx.list[i].b,
            M = "" + (A * B);

        setCtx(prevCtx => ({
            ...prevCtx,
            a:A,
            b:B,
            r:"",
            m: M,
            hint:false,
            match:0,
            busy:false,
            index: i + 1
        }));

//            setCtx({a:A, b:B, r:"", match: M, hint:false});
    }

    useEffect(() => {
        var i, j, lst = [];

        for(i = 2; i < 10; i++) for(j = 2; j < 10; j++)
            lst.push({a:i, b:j});
        for(i = 0; i < 10000; i++)
        {
            j = Math.floor(Math.random() * lst.length);
            var p = lst.splice(j, 1);
            lst.push(p[0]);
        };

///        console.log("useEffect: lst.length=" + lst.length);

/*
        setCtx(prevCtx => ({
            ...prevCtx,
            list:['a','b'],
            foo: 'bar'
        }));
*/
        ctx.list = lst;

///        console.log("useEffect: ctx.list.length=" + ctx.list.length);

        setup();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="App">
            <header className="App-header">
                <Display keyPressed={keyPressed} ctx={ctx}/>
                <Keyboard keyPressed={keyPressed} />
            </header>
        </div>
    );
}

export default App;
