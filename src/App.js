import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import ResultList from './ResultList'
import axios from 'axios'

function App() {
  const BASE_URL = 'https://mhw-db.com/'
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [type, setType] = useState(['head'])
  const [searchUrl, setSearchUrl] = useState([BASE_URL])
  const [urlModifier, setUrlModifier] = useState(['armor'])
  const [searchQuery, setSearchQuery] = useState('')
  const [skills, setSkills] = useState([''])

  //On load
  useEffect(() =>
  {
    setLoading(true)
    const newUrl = BASE_URL + urlModifier
    setSearchUrl(newUrl)
    axios(
    {
      method:'GET',
      url: newUrl,
    })
    .then(res => {
      setResults(res.data)
      //console.log(res.data)
    })
    .then(()=> setLoading(false))
    axios(
      {
        method:'GET',
        url: BASE_URL + 'skills',
      })
      .then(res => {
        setSkills(res.data)
      })
      .then(()=> setLoading(false))
  }, [])

  //On change to queries
  useEffect(() =>
  {
    setLoading(true)
    let cancel
    const newUrl = BASE_URL + urlModifier
    setSearchUrl(newUrl)
    axios(
    {
      method:'GET',
      url: newUrl,
      params: {q: searchQuery },
      cancelToken : new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setResults(res.data)
      console.log(results)
    })
    .then(()=>setLoading(false))
    //catching errors, including checking for cancelled search
    .catch(e => {
        if(axios.isCancel(e)) return
    })
    return () => cancel()
  }, [type, searchQuery])

  //render
  return (
    <>
      <h1>MONSTER HUNTER WORLD ARMOR BUILDER</h1>
      <SearchBar
        skills={skills}
        urlModifier={urlModifier}
        setType={setType} 
        setUrlModifier={setUrlModifier}
        setSearchQuery={setSearchQuery}
      />
      {
        loading ? <div>Loading...</div> :
        <ResultList 
          results={results} 
        />
      }
      
    </>
  );
}

export default App;
