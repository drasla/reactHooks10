import {useState, useEffect} from 'react';

export const useFavicon = (initialFaviconUrl) => {
    const [faviconUrl, setFaviconUrl] = useState(initialFaviconUrl);

    useEffect(() => {
        const faviconEl = document.querySelector("link[rel='icon']");

        if (faviconEl) {
            faviconEl.href = faviconUrl;
        }
    }, [faviconUrl]);

    return setFaviconUrl;
};