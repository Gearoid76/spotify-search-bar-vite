import React from 'react';
import './NewPlayList.css';

export const NewPlayList = ({ playlist }) => {
  return (
    <div className='new-playlist'> 
        <h2>New Playlist</h2>
        {playlist.map((song, index) => (
            <div key={index} className="playlist-item">
              <div className="playlist-song">{song.song}</div>
              <div className="playlist-artist">{song.artist}</div>
              <div className="playlist-album">{song.album}</div>
            </div>
        ))}
    </div>
  );
};

   

             
             
    

