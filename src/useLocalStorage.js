import {useState} from 'react';

export const useLocalStorage = (name, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            const item = window.localStorage.getItem(name);
            return item ? JSON.parse(item) : initialValue;
        } catch(error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? value(state) : value;
            setState(valueToStore);
            window.localStorage.setItem(name, JSON.stringify(valueToStore));
        } catch(error) {
            console.log(error)
        }
    }
    return [state, setValue];
}