import {useState, useEffect} from 'react';

export const useGeolocation = () => {
    const [state, setState] = useState({
        coords: {
            latitude: null,
            longitude: null
        },
        error: null
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            return;
        }

        const handleSuccess = position => {
            const a = position.coords;
            setState(a);
        };

        const handleError = error => {
            const a = {
                coords: {
                    latitude: null,
                    longitude: null
                },
                error: error
            };
            setState(a);
        }

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    return { state };
}