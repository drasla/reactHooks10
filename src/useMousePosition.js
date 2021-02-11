import {useState, useEffect} from 'react';

export const useMousePosition = () => {
    const [state, setState] = useState({
        x: null,
        y: null
    });

    const updateMousePosition = event => {
        setState({x: event.clientX, y: event.clientY});
    };

    useEffect(() => {
        window.addEventListener("mouseover", updateMousePosition);
        return () => {
            window.removeEventListener("mouseover", updateMousePosition);
        }
    }, []);

    return state;
}