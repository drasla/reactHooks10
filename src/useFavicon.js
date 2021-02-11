import {useState, useEffect} from 'react';

export const useFavicon = () => {
    const [state, setState] = useState(0);
    const change = () => {
        setState(state ? !state : !state);
    };
    useEffect(() => {
        const faviconUpdate = () => {
            const favicon = document.querySelector("link");
            if(state) {
                favicon.href = "https://www.google.com/favicon.ico";
            } else {
                favicon.href = "https://www.freepngimg.com/download/facebook/64896-media-computer-icons-logo-of-embassy-facebook.png"
            }
        };
        faviconUpdate();
    }, [state]);

    return {state, change};
}