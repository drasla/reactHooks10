import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useDeviceOrientation} from "./useDeviceOrientation";
import {useGeolocation} from "./useGeolocation";
import {useKeyPress} from "./useKeyPress";
import styled from "styled-components"
import {useLocalStorage} from "./useLocalStorage";
import {useMousePosition} from "./useMousePosition";
import {useOnline} from "./useOnline";
import {useFavicon} from "./useFavicon";

const H2 = styled.h2`
  margin-top: 40px;
`;

const useLockScroll = () => {
    const [isLocked, setIsLocked] = useState(false);

    const lockScroll = () => {
        setIsLocked(true);
        document.body.style.overflow = "hidden";
    };
    const unlockScroll = () => {
        setIsLocked(false);
        document.body.style.overflow = "scroll";
    };

    return [isLocked, { lockScroll, unlockScroll }];
};

const App = () => {
    const {alpha, beta, gamma} = useDeviceOrientation();
    const setFavicon = useFavicon("https://nomadcoders.co/m.png");
    const faviconChange = () => { setFavicon("https://www.google.com/favicon.ico"); };
    const {state: {latitude: lat, longitude: long}, error} = useGeolocation();
    const kPressed = useKeyPress("k");
    const iPressed = useKeyPress("i");
    const mPressed = useKeyPress("m");
    const cPressed = useKeyPress("c");
    const hPressed = useKeyPress("h");
    const [currentLS, setLS] = useLocalStorage("storage", "12345");
    const { x, y } = useMousePosition();
    const isOnLine = useOnline();
    const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();

    return (
        <div className="App">
            <h1>Superhooks!</h1>
            <H2>useDeviceOrientation</H2>
            <ul>
                <li>Alpha : {alpha ? alpha : "null"}</li>
                <li>Beta : {beta ? beta : "null"}</li>
                <li>Gamma : {gamma ? gamma : "null"}</li>
            </ul>
            <H2>useFavicon</H2>
            <button onClick={faviconChange}>Change Favicon</button>
            <H2>useGeolocation</H2>
            <ul>
                <li>Latitude : {lat ? lat : "null"}</li>
                <li>Longitude: {long ? long : "null"}</li>
                <li>Geolocation Error: {error ? error : "null"}</li>
            </ul>
            <H2>useKeyPress</H2>
            <ul>
                <li>Pressed 'k': {kPressed && "K"}</li>
                <li>Pressed 'i': {iPressed && "I"}</li>
                <li>Pressed 'm': {mPressed && "M"}</li>
                <li>Pressed 'c': {cPressed && "C"}</li>
                <li>Pressed 'h': {hPressed && "H"}</li>
                <li>Pressed 'i': {iPressed && "I"}</li>
            </ul>
            <H2>useLocalStorage</H2>
            <ul>
                <li>Current Value: {currentLS}</li>
                <button onClick={() => setLS("12345")}>Set value: 12345</button>
                <button onClick={() => setLS(null)}>Clear LS</button>
            </ul>
            <H2>useMousePosition</H2>
            <ul>
                <li>Mouse X : {x}</li>
                <li>Mouse Y : {y}</li>
            </ul>
            <H2>useOnline</H2>
            <div>Are we online? {isOnLine ? "Yes" : "No"}</div>
            <H2>useLockScroll</H2>
            <h3>Is Locked? {isLocked ? "Yes" : "No"}</h3>
            <button onClick={lockScroll}>lock scroll</button>
            <button onClick={unlockScroll}>unlock scroll</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

