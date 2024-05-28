import React,{ useState } from 'react'
import { redirectToAuthCodeFlow, getAccessToken } from './authentication';
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList';

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
  })
}

function App() {
  const [results, setResults] = useState([]);

  return (
   <div className='App'>
    <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results} />
    </div>
   </div>
  )
}

export default App
