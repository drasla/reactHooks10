import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useNotification} from "./useNotification";

const App = () => {
    const trigerNotif = useNotification("Can I steal your kimchi?", {body: "I Love kimchi you"});
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>Hi</h1>
            <button onClick={trigerNotif}>Hello</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

