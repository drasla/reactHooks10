import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {usePreventLeave} from "./usePreventLeave";

const App = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
        <div className="App">
            <button onclick={enablePrevent}>Protect</button>
            <button onclick={disablePrevent}>Unprotect</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

