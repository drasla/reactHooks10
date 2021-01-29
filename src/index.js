import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useTabs} from "./useTabs";

const content = [
    {
        tab: "section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "section 2",
        content: "I'm the content of the Section 2"
    },
    {
        tab: "section 3",
        content: "I'm the content of the Section 3"
    },
];

const App = () => {
    const sayHello = () => console.log("hello");

    useEffect(sayHello, [number]);
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)} />
            <button onClick={() => setAnumber(aNumber + 1)} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
