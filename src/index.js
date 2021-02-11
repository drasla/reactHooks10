import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useDeviceOrientation} from "./useDeviceOrientation";
import {useFavicon} from "./useFavicon";

const App = () => {
    const useDevice = useDeviceOrientation();
    const useFavi = useFavicon();
    return (
        <div className="App">
            <h1>Superhooks!</h1>
            <h2>useDeviceOrientation</h2>
            <ul>
                <li>Alpha : {useDevice.alpha ? useDevice.alpha : "null"}</li>
                <li>Beta : {useDevice.beta ? useDevice.beta : "null"}</li>
                <li>Gamma : {useDevice.gamma ? useDevice.gamma : "null"}</li>
            </ul>
            <h2>useFavicon</h2>
            <button onClick={useFavi.change}>Change Favicon</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

