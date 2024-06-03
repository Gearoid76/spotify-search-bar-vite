import React, { useState, useEffect } from 'react';
import { NewPlayList } from './components/NewPlayList';
import { redirectToAuthCodeFlow, getAccessToken } from './authentication';
import { createSpotifyPlaylist } from './components/createSpotifyPlaylist'; 
import { addTracksToPlaylist } from './components/addTracksToPlaylist';
import './App.css';
import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList';

const clientId = import.meta.env.VITE_CLIENT_ID;
//const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const authUrl = new URL('https://accounts.spotify.com/authorize')


function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      (async () => {
        try {
          const token = await getAccessToken(clientId, code);
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

  const savePlaylist = async (name, playlist) => {
    try {
      const playlistId = await createSpotifyPlaylist(name, accessToken);
      const trackUris = playlist.map(song => song.uri);
      await addTracksToPlaylist(playlistId, trackUris, accessToken);
      alert('Playlist saved to spotify');
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