import React, {useState} from 'react';
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
    const {currentItem, changeItem} = useTabs(0, content);
    return (
        <div className="App">
            {content.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
            <div>{currentItem.content}</div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
