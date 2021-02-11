import {useState, useEffect} from 'react';

export const useOnline = () => {
    const getOnlineStatus = () => {
        return typeof navigator !== "underfined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
    }

    const [state, setState] = useState(getOnlineStatus());

    const changeOnline = () => setState(true);
    const changeOffline = () => setState(false);

    useEffect(() => {
        window.addEventListener("online", changeOnline);
        window.addEventListener("offline", changeOffline);
        return () => {
            window.removeEventListener("online", changeOnline);
            window.removeEventListener("offline", changeOffline);
        }
    }, []);
    return state;
}