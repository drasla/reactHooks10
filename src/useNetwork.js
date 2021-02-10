import React, {useState, useEffect, useRef} from 'react';

export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    useEffect(() => {
        const handleChange = () => {
            if(typeof onChange === "function") {
                onChange(navigator.onLine);
            }
            setStatus(navigator.onLine);
        }
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
    }, [])
    return status;
}