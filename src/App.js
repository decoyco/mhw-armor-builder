import React, {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import axios from 'axios'

function App() {
  const BASE_URL = 'https://mhw-db.com/'
  const [type, setType] = useState()
  const [searchUrl, setSearchUrl] = useState([BASE_URL])
  

  useEffect(() =>
  {
    const newUrl = BASE_URL + type
    setSearchUrl(newUrl)
  }, [type])

  return (
    <>
    <h1>Monster Hunter World Armor Builder</h1>

    <SearchBar />
    <ResultList />
    </>
  );
}

export default App;
