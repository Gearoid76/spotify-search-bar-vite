import React,{ useState } from 'react'
import { redirectToAuthCodeFlow, getAccessToken } from './authentication';
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList';
import { NewPlayList } from './components/NewPlayList';

const clientId = import.meta.env.VITE_CLIENT_ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  (async () => {
    try {
      const accessToken = await getAccessToken(clientId, code);
    } catch (error) {
      console.error('Error', error.message);
    }
  })();
}

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlayList = (result) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, result]);
  };

  return (
   <div className='App'>
      <div className="search-bar-container">
          <SearchBar setResults={setResults}/>
          <div className='resultAndPlaylistColumn'>
          <SearchResultsList results={results} addToPlayList={addToPlayList} />
          <NewPlayList playlist={playlist} />
          </div>
      </div>   
   </div>
  );
}

export default App;
