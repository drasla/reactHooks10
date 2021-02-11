import {useState, useEffect} from 'react';

export const useKeyPress = (targetKey) => {
    const [state, setState] = useState(false);
    const downKeyHandler = ({ key }) => {
        if (key === targetKey) {
            setState(true);
        }
    }

    const upKeyHandler = ({ key }) => {
        if (key === targetKey) {
            setState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downKeyHandler);
        window.addEventListener('keyup', upKeyHandler);
        return () => {
            window.removeEventListener('keydown', downKeyHandler);
            window.removeEventListener('keyup', upKeyHandler);
        }
    }, []);
    return state;
};