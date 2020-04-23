import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import ResultList from './ResultList'
import EquipmentStats from './EquipmentStats'
import axios from 'axios'
import { render } from '@testing-library/react';

function App() {
  const BASE_URL = 'https://mhw-db.com/'
  //states
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [type, setType] = useState(['head'])
  const [searchUrl, setSearchUrl] = useState([BASE_URL])
  const [urlModifier, setUrlModifier] = useState(['armor'])
  const [searchQuery, setSearchQuery] = useState('{"type":"head"}')
  const [skills, setSkills] = useState([''])
  const [head, setHead] = useState('')
  const [chest, setChest] = useState('')
  const [gloves, setGloves] = useState('')
  const [waist, setWaist] = useState('')
  const [boots, setBoots] = useState('')
  const [weapon, setWeapon] = useState('')
  const [charm, setCharm] = useState('')
  const [dbSkills, setDbSkills] = useState([])

  //On load
  useEffect(() =>
  {
    setLoading(true)
    const newUrl = BASE_URL + urlModifier
    setSearchUrl(newUrl)
    const equipment_request = axios(
    {
      method:'GET',
      params: {q: searchQuery},
      url: newUrl,
    })
    const skills_request = axios.get(BASE_URL+'skills')

    axios.all([equipment_request,skills_request]).then(axios.spread((...res) => {
      setResults(res[0].data)
      setDbSkills(res[1].data)
    })).then(()=>{
      setLoading(false)
    })
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
    .then(res =>{
      setResults(res.data)
      setLoading(false)
    })
    //catching errors, including checking for cancelled search
    .catch(e => {
      if(axios.isCancel(e)) return
  })
    render()
    return () => cancel()
  }, [searchQuery])

  //render
  return (
    <>
      <h1>MONSTER HUNTER WORLD ARMOR BUILDER</h1>
      <EquipmentStats 
        head={head}
        chest={chest}
        gloves={gloves}
        waist={waist}
        boots={boots}
        weapon={weapon}
        charm={charm}
        dbSkills={dbSkills}
      />
      <SearchBar
        type={type}
        dbSkills={dbSkills}
        urlModifier={urlModifier}
        setType={setType} 
        setUrlModifier={setUrlModifier}
        setSearchQuery={setSearchQuery}
      />
      {
        loading ? <div>Loading...</div> :
        <ResultList 
          type={type}
          results={results} 
          setHead={setHead}
          setChest={setChest}
          setGloves={setGloves}
          setWaist={setWaist}
          setBoots={setBoots}
          setWeapon={setWeapon}
          setCharm={setCharm}
        />
      }
      
    </>
  );
}

export default App;
