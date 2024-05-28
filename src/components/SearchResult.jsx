import React from 'react';
import "./SearchResult.css";

export const SearchResult = ({ result, addToPlaylist }) => {
  const { song, artist, album } = result;

  const handleClick = () => {
    addToPlaylist(result);
    alert(`You clicked on "${song}" by ${artist} from the album "${album}"`);
  };

  return (
    <div 
      className='search-result' 
      onClick={handleClick}
    >
      <div className='result-name'>{song}</div>
      <div className='result-artist'>{artist}</div>
      <div className='result-album'>{album}</div>
    </div>
  );
};

