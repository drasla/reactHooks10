import React, {useState, useEffect} from 'react';

export const useDeviceOrientation = () => {
    const [state, setState] = useState({
        alpha: null,
        beta: null,
        gamma: null
    })

    const handleOrientation = ({ alpha = null, beta = null, gamma = null }) => {
        setState({alpha, beta, gamma})
    }

    useEffect(() => {
        window.addEventListener('deviceorientation', handleOrientation);
        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        }
    }, [])
    return state;
}