import React, {useState, useEffect} from 'react';
import './App.css';
import PageLayer from './PageLayer'
import EquipmentStats from './EquipmentStats'
import axios from 'axios'
import { render } from '@testing-library/react';

function App() {
  const BASE_URL = 'https://mhw-db.com/'
  //states
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [type, setType] = useState(['head'])
  const [urlModifier, setUrlModifier] = useState('armor')
  const [searchQuery, setSearchQuery] = useState('{"type":"head"}')
  const [head, setHead] = useState('')
  const [chest, setChest] = useState('')
  const [gloves, setGloves] = useState('')
  const [waist, setWaist] = useState('')
  const [boots, setBoots] = useState('')
  const [weapon, setWeapon] = useState('')
  const [charm, setCharm] = useState('')
  const [skills, setSkills] = useState(new Map())
  const [weaponSlots, setWeaponSlots] = useState(new Map())
  const [headSlots, setHeadSlots] = useState(new Map())
  const [chestSlots, setChestSlots] = useState(new Map())
  const [glovesSlots, setGlovesSlots] = useState(new Map())
  const [waistSlots, setWaistSlots] = useState(new Map())
  const [bootsSlots, setBootsSlots] = useState(new Map())
  const [dbSkills, setDbSkills] = useState([])
  const [decos, setDecos] = useState([])
  const [name, setName] = useState(' ')
  const [equipmentDisplay, setEquipmentDisplay] = useState('')
  const [slotSelect, setSlotSelect] = useState('')
  const [slot1, setSlot1] = useState(0)
  const [slot2, setSlot2] = useState(0)
  const [slot3, setSlot3] = useState(0)
  
  //On load
  useEffect(() =>
  {
    document.title = 'MHW Armor Builder'
    setLoading(true)
    const newUrl = BASE_URL + urlModifier
    let cancel
    const equipment_request = axios(
    {
      method:'GET',
      params: {q: searchQuery},
      url: newUrl,
      cancelToken : new axios.CancelToken(c => cancel = c)
    })
    const skills_request = axios.get(BASE_URL+'skills')

    axios.all([equipment_request,skills_request]).then(axios.spread((...res) => {
      setResults(res[0].data)
      setDbSkills(res[1].data)
    })).then(()=>{
      setLoading(false)
    })
    .catch(e => {
      if(axios.isCancel(e)) return
  })
    render()
    return () => cancel()
  }, [])

  //On change to queries
  useEffect(() =>
  {
    setLoading(true)
    let cancel
    const newUrl = BASE_URL + urlModifier
    axios(
    {
      method:'GET',
      url: newUrl,
      params: {q: searchQuery },
      cancelToken : new axios.CancelToken(c => cancel = c)
    })
    .then(res =>{
      let t_results = res.data.filter(result => 
        result.name.toLowerCase().indexOf(name.toLowerCase()) != -1)
        console.log("slot1:" + slot1)
        console.log("slot2:" + slot2)
        console.log("slot3:" + slot3)
      if(slot1 > 0)
        {
          t_results = t_results.filter(result => 
            result.slots[0].rank >= slot1)
        }
      if(slot2 > 0)
        {
          t_results = t_results.filter(result => 
          result.slots[1].rank >= slot2)
        }
      if(slot3 > 0)
        {
          t_results = t_results.filter(result => 
          result.slots[2].rank >= slot3)
        }
      setResults(t_results)
      setLoading(false)
    })
    //catching errors, including checking for cancelled search
    .catch(e => {
      if(axios.isCancel(e)) return
  })
    render()
    return () => cancel()
  }, [searchQuery, name, type, slot1, slot2, slot3])

  //render
  return (
    <>
      <h1>MONSTER HUNTER WORLD ARMOR BUILDER</h1>
      <EquipmentStats 
        slotSelect={slotSelect}
        equipmentDisplay={equipmentDisplay}
        urlModifier={urlModifier}
        decos={decos}
        skills={skills}
        weaponSlots={weaponSlots}
        headSlots={headSlots}
        chestSlots={chestSlots}
        glovesSlots={glovesSlots}
        waistSlots={waistSlots}
        bootsSlots={bootsSlots}
        head={head}
        chest={chest}
        gloves={gloves}
        waist={waist}
        boots={boots}
        weapon={weapon}
        charm={charm}
        dbSkills={dbSkills}
        setWeapon={setWeapon}
        setHead={setHead}
        setChest={setChest}
        setGloves={setGloves}
        setWaist={setWaist}
        setBoots={setBoots}
        setCharm={setCharm}
        setWeaponSlots={setWeaponSlots}
        setHeadSlots={setHeadSlots}
        setChestSlots={setChestSlots}
        setGlovesSlots={setGlovesSlots}
        setWaistSlots={setWaistSlots}
        setBootsSlots={setBootsSlots}
        setSkills={setSkills}
        setSlotSelect={setSlotSelect}
        setDecos={setDecos}
      />
      <PageLayer 
        slot1={slot1}
        slot2={slot2}
        slot3={slot3}
        type={type}
        dbSkills={dbSkills}
        urlModifier={urlModifier}
        setType={setType} 
        setUrlModifier={setUrlModifier}
        setSearchQuery={setSearchQuery}
        setName={setName}
        setEquipmentDisplay={setEquipmentDisplay}
        setSlot1={setSlot1}
        setSlot2={setSlot2}
        setSlot3={setSlot3}
        loading={loading}
        decos={decos}
        weaponSlots={weaponSlots}
        headSlots={headSlots}
        chestSlots={chestSlots}
        glovesSlots={glovesSlots}
        waistSlots={waistSlots}
        bootsSlots={bootsSlots}
        slotSelect={slotSelect}
        urlModifier={urlModifier}
        results={results} 
        setHead={setHead}
        setChest={setChest}
        setGloves={setGloves}
        setWaist={setWaist}
        setBoots={setBoots}
        setWeapon={setWeapon}
        setCharm={setCharm}
        setDecos={setDecos}
      />
    </>
  );
}

export default App;
