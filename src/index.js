import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useTitle} from "./useTitle";

const App = () => {
    const titleUpdater = useTitle("Loading");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div className="App">
            <div>Hi</div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
