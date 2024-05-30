import React, { useState } from 'react';
import './NewPlayList.css';

export const NewPlayList = ({ playlist,savePlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSave = () => {
    savePlaylist(playlistName, playlist);
  };

      return (
        <div className='new-playlist'>
          <input 
            type='text'
            placeholder='Playlist Name'
            value={playlistName}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save to Spotify</button>
          <div className='playlist'>
            {playlist.map((song, index) => (
              <div key={index} className='playlist-item'>
                {song.song} - {song.artist} ({song.album})
              </div>
            ))}
          </div>
        </div>
      );
    };

