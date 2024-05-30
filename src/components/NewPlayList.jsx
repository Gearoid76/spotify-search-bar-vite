import React from 'react';
//import { SearchResultsList } from './SearchResultsList';
import './NewPlayList.css';
    
    export const NewPlayList = ({ playlist }) => {
      return (
        <div className='new-playlist'>
          <input 
            type='text' 
            
          />
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
    

