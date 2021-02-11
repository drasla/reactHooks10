import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useScroll} from "./useScroll";
import {useFullscreen} from "./useFullscreen";

const App = () => {
    const {y} = useScroll();
    const onFullS = isFull => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullS);

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue"}}>Hi</h1>
            <div ref={element}>
                <img alt="" src="https://s.pstatic.net/static/www/mobile/edit/2021/0209/cropImg_728x360_54798928890668437.jpeg" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

