//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import {MainDiv, MainMul} from './Main';

function App() {
    const list = [];

    if(!list.length)
    {
        var i, j;

        for(i = 2; i < 10; i++) for(j = 2; j < 10; j++)
            list.push({a:i, b:j});
        for(i = 0; i < 10000; i++)
        {
            j = Math.floor(Math.random() * list.length);
            var p = list.splice(j, 1);
            list.push(p[0]);
        };

        console.log("App: list.length=" + list.length);
    };

    return (
        <div className="App">
            <Router>
            <header className="App-header">
            <div className='AppMenu'>
                <NavLink to="/multiplication-trainer/MUL" className={(navData) => (navData.isActive ? "AppMenuItem active" : 'AppMenuItem')}> *<br/>MUL </NavLink>
                <NavLink to="/multiplication-trainer/DIV" className={(navData) => (navData.isActive ? "AppMenuItem active" : 'AppMenuItem')}> :<br/>DIV </NavLink>
            </div>
                <Routes>
                    <Route path="/multiplication-trainer/MUL" element={<div className="mul"><MainMul list={list}/></div>}/>
                    <Route path="/multiplication-trainer/DIV" element={<div className="div"><MainDiv list={list}/></div>}/>
                </Routes>
            </header>
            </Router>
        </div>
    );
}

export default App;
