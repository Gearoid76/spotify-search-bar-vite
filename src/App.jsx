import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResult } from './components/SearchResult';
import "./App.css"; // Assume you have an App.css for layout styling

const App = () => {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
  };

  return (
    <div className="app-container">
      <div className="search-column">
        <SearchBar setResults={setResults} />
        <div className="search-results">
          {results.map(result => (
            <SearchResult key={result.id} result={result} addToPlaylist={addToPlaylist} />
          ))}
        </div>
      </div>
      <div className="playlist-column">
        <h2>Playlist</h2>
        <div className="playlist">
          {playlist.map((song, index) => (
            <div key={index} className="playlist-item">
              <div className="playlist-song">{song.song}</div>
              <div className="playlist-artist">{song.artist}</div>
              <div className="playlist-album">{song.album}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
