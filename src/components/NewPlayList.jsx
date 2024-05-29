import React from 'react';
import "./SearchResultsList.css"

export const NewPlayList = ({ playlist }) => {
  return (
    <div className='new-playlist'> 
        <h2>New Playlist</h2>
        {playlist.map((song, index) => (
            <div key={index} className="results-list">
              <div className="playlist-song">{song.song}</div>
              <div className="playlist-artist">{song.artist}</div>
              <div className="playlist-album">{song.album}</div>
            </div>
        ))}
    </div>
  );
};

   

             
             
    

