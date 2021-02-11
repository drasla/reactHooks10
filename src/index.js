import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useDeviceOrientation} from "./useDeviceOrientation";
import {useGeolocation} from "./useGeolocation";
import {useKeyPress} from "./useKeyPress";
import styled from "styled-components"

const H2 = styled.h2`
  margin-top: 40px;
`;



const App = () => {
    const {alpha, beta, gamma} = useDeviceOrientation();
    const {state: {latitude: lat, longitude: long}, error} = useGeolocation();
    const kPressed = useKeyPress("k");
    const iPressed = useKeyPress("i");
    const mPressed = useKeyPress("m");
    const cPressed = useKeyPress("c");
    const hPressed = useKeyPress("h");
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
            <button>Change Favicon</button>
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
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

