import React from 'react';
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  const { song, artist, album } = result;

  return (
    <div 
      className='search-result' 
      onClick={() => alert(`You clicked on "${song}" by ${artist} from the album "${album}"`)}
    >
      <div className='result-name'>{song}</div>
      <div className='result-artist'>{artist}</div>
      <div className='result-album'>{album}</div>
    </div>
  );
};

