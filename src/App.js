import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import ResultList from './ResultList'
import axios from 'axios'

function App() {
  const BASE_URL = 'https://mhw-db.com/'
  const [results, setResults] = useState()
  const [type, setType] = useState()
  const [searchUrl, setSearchUrl] = useState([BASE_URL])
  
  useEffect(() =>
  {
    const newUrl = BASE_URL + 'armor'
    console.log(newUrl)
    setSearchUrl(newUrl)
    fetch(newUrl)
    .then(res => {
      res.json()
    })
    .then(data => {
      console.log(data)
    })
  }, [])


  // useEffect(() =>
  // {
  //   const newUrl = BASE_URL + type
    
  //   setSearchUrl(newUrl)
  //   fetch(searchUrl)
  //   .then(res => {
  //     res.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //   })
  // }, [type])

  return (
    <>
      <h1>Monster Hunter World Armor Builder</h1>

      {//<SearchBar setType={setType}/>
      //<ResultList 
        //results={results} 
      ///>
      }
    </>
  );
}

export default App;
