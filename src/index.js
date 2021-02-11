import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import useAxios from "./useAxios";

const App = () => {
    const {loading, error, data, refetch} = useAxios({url: "https://api.coinpaprika.com/v1/coins"});
    console.log(`${loading} , ${error} , ${JSON.stringify(data)}`)
    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

