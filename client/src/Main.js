import { useEffect, useState } from "react";
import Keyboard from './Components/Keyboard';
import Display from './Components/Display';
import './Main.css';

const Main = ({isMul, list}) => {
    const [ctx, setCtx] = useState({a:0, b:0, r:"", m: "", match: 0, hint:false, busy:false, index:0});

    console.log("Main: useEffect: list.length=" + list.length);

    const keyPressed = (v) => {
        console.log("keyPressed: " + v);

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

            console.log("res.length=" + res.length + ", ctx.m.length=" + ctx.m.length)
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

    const setup = () => {

        var i = (ctx.index === list.length) ? 0 : ctx.index;

        console.log( list[i] );

        var A, B, M;

        if(isMul)
        {
            A = list[i].a;
            B = list[i].b;
            M = "" + (A * B);
        }
        else
        {
            A = list[i].a * list[i].b;
            B = list[i].a;
            M = "" + list[i].b;
        }

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
    }

    useEffect(() => {
        if(!ctx.a)
            setup();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="Main">
            <Display keyPressed={keyPressed} isMul={isMul} ctx={ctx}/>
            <Keyboard keyPressed={keyPressed} />
        </div>
    );
};

export const MainDiv  = ({list}) => Main({isMul : false, list : list});
export const MainMul  = ({list}) => Main({isMul : true, list : list});
