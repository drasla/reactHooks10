import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useFadeIn} from "./useFadeIn";
import {useNetwork} from "./useNetwork";

const App = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    }
    const onLine = useNetwork(handleNetworkChange);
    const fadeInH1 = useFadeIn(2, 2);
    const fadeInP = useFadeIn(5, 5);
    return (
        <div className="App">
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>lorem ipsum</p>
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

