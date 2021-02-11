import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {useDeviceOrientation} from "./useDeviceOrientation";
import {useGeolocation} from "./useGeolocation";
import styled from "styled-components"

const H2 = styled.h2`
  margin-top: 40px;
`;





const App = () => {
    const {alpha, beta, gamma} = useDeviceOrientation();
    const {state: {latitude: lat, longitude: long}, error} = useGeolocation();
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
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

