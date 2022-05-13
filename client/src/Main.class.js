import React from 'react';
import Keyboard from './Components/Keyboard';
import Display from './Components/Display';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a:0,
            b:0,
            r:"",
            m: "",
            match: 0,
            hint:false,
            busy:false,
            index:0,
            list: props.list,
            isMul: props.isMul
        };
        this.keyPressed = this.keyPressed.bind(this);
        this.setup = this.setup.bind(this);

        console.log("Main:constructor isMul=" + this.props.isMul)

        this.setup();
    }

    keyPressed(v) {
        console.log("keyPressed: " + v);

        if(this.state.busy) return;

        if(v === '?')
        {
            this.setState({hint:true});
        }
        else if(v === '*' || v === '#')
        {
            this.setState({r: "", match: 0});
        }
        else
        {
            var res = this.state.r + v;

            this.setState({r: res});

            console.log("res.length=" + res.length + ", this.state.m.length=" + this.state.m.length)

            if(res.length === this.state.m.length)
            {
                this.setState({
                    busy: true,
                    match: (res === this.state.m) ? 1 : -1
                });

                setTimeout(() => {
                    if(res === this.state.m)
                        this.setup();
                    else
                        this.setState({
                            r: "",
                            match: 0,
                            busy: false
                        });
                }, 1000);
            };
        }
    }

    setup() {
        var i = (this.state.index === this.state.list.length) ? 0 : this.state.index;

        console.log( this.state.list[i] );

        var A, B, M;

        if(this.state.isMul)
        {
            A = this.state.list[i].a;
            B = this.state.list[i].b;
            M = "" + (A * B);
        }
        else
        {
            A = this.state.list[i].a * this.state.list[i].b;
            B = this.state.list[i].a;
            M = "" + this.state.list[i].b;
        }

        this.setState
        (
            {a:A,
            b:B,
            r:"",
            m: M,
            hint:false,
            match:0,
            busy:false,
            index: i + 1
        });
    };

    render() {
        return (
            <div className="Main">
                <Display keyPressed={this.keyPressed} isMul={this.isMul} ctx={this.state}/>
                <Keyboard keyPressed={this.keyPressed} />
            </div>
        );
    }
}

export default Main;
