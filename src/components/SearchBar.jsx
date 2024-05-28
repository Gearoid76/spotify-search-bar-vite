import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css";
import { getSpotifyToken, searchSpotify } from './spotify';

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getSpotifyToken();
                setToken(token);
            } catch (error) {
                console.error("Error fetching Spotify token:", error);
            }
        };
        fetchToken();
    }, []);

    const fetchData = useCallback(async (value) => {
        if (token) {
            try {
                const results = await searchSpotify(token, value);
                setResults(results);
            } catch (error) {
                console.error("Error fetching data from Spotify:", error);
            }
        }
    }, [token, setResults]);

    const handleChange = (value) => {
        setInput(value);
        if (value) {
            debounceFetchData(value);
        }
    };

    const debounceFetchData = useCallback(
        debounce((value) => {
            fetchData(value);
        }, 500),
        [fetchData]
    );

    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon" />
            <input
                placeholder='Type artist, song or album.'
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
