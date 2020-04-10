import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import ResultList from './ResultList'
import axios from 'axios'

function App() {
  const BASE_URL = 'https://mhw-db.com/'
  const [results, setResults] = useState([])
  const [type, setType] = useState(['head'])
  const [searchUrl, setSearchUrl] = useState([BASE_URL])
  const [urlModifier, setUrlModifier] = useState(['armor'])

  useEffect(() =>
  {
    let cancel
    const newUrl = BASE_URL + urlModifier
    setSearchUrl(newUrl)
    axios(
    {
      method:'GET',
      url: newUrl,
      params: {q: '{"defense.base":{"$gt":0}}'},
      cancelToken : new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setResults(res.data)
      console.log(res.data)
    })
    //catching errors, including checking for cancelled search
    .catch(e => {
        if(axios.isCancel(e)) return
    })
    return () => cancel()
  }, [])

  useEffect(() =>
  {
    let cancel
    const newUrl = BASE_URL + urlModifier
    setSearchUrl(newUrl)
    axios(
    {
      method:'GET',
      url: newUrl,
      params: {q: '{"type":"' + type + '"}'},
      cancelToken : new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setResults(res.data)
      console.log(results)
    })
    //catching errors, including checking for cancelled search
    .catch(e => {
        if(axios.isCancel(e)) return
    })
    return () => cancel()
  }, [type])

  return (
    <>
      <h1>MONSTER HUNTER WORLD ARMOR BUILDER</h1>
      <SearchBar
        setType={setType} 
        setUrlModifier={setUrlModifier}
      />
      <ResultList 
        results={results} 
      />
      
    </>
  );
}

export default App;
