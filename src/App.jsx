import React, { useState, useEffect } from 'react';
import { NewPlayList } from './components/NewPlayList';
import { redirectToAuthCodeFlow, getAccessToken } from './authentication';
import { createSpotifyPlaylist } from './components/createSpotifyPlaylist'; 
import { addTracksToPlaylist } from './components/addTracksToPlaylist';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';

const clientId = import.meta.env.VITE_CLIENT_ID;

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      console.log('No code found, redirecting to auth flow');
      redirectToAuthCodeFlow(clientId);
    } else {
      console.log('Code found, fetching access token');
      (async () => {
        try {
          const token = await getAccessToken(clientId, code);
          console.log('Fetched Access Token:', token);
          setAccessToken(token);
        } catch (error) {
          console.error('Error', error.message);
        }
      })();
    }
  }, []);

  const addToPlayList = (result) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, result]);
  };
  console.log('App ln 41 hello ');

  const savePlaylist = async (name, playlist) => {
    console.log('Playlist before saving:', playlist);
    const trackUris = playlist.map(song => song.uri);
    console.log('Track URIs:', trackUri);

    if (trackUris.includes(undefined)) {
      console.error('Invalid track URIs detected:', trackUris);
      alert('Invalid track URIs detected.');
      return;
    }

    console.log('Using Access Token:', accessToken); 
    try {
      const playlistId = await createSpotifyPlaylist(name, accessToken);
      console.log('Created playlist ID:', playlistId);

      if (playlistId) {
        const trackUris = playlist.map(song => song.uri);
        await addTracksToPlaylist(accessToken, playlistId, trackUris);
        alert('Playlist saved to Spotify');
      } else {
        throw new Error('Failed to create playlist');
      }
    } catch (error) {
      console.error('Error saving playlist:', error);
      alert('Failed to save to playlist');
    }
  };

  return (
  <div className='App'>
      <div className="search-bar-container">
      <SearchBar setResults={setResults} />
      <div className='resultAndPlaylistColumn'>
        <SearchResultsList results={results} addToPlayList={addToPlayList} />
        <NewPlayList playlist={playlist} savePlaylist={savePlaylist} />
      </div>
      </div>
    </div>
  );
}

export default App;
