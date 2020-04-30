import React, {useState, useEffect} from 'react'
import TypeSelect from './TypeSelect'
import BaseStatSearch from './BaseStatSearch'
import RankSelect from './RankSelect'
import NameSearch from './NameSearch'
import SkillSelect from './SkillSelect'
import ElementSearch from './ElementSearch'
import SlotSelect from './SlotSelect'
import { render } from '@testing-library/react'

//Creates the Search window, changes depending on Type state
//Dependent on BaseStateSearch, ElementSearch, NameSearch, RankSelect, SkillSelect, SlotSelect, and TypeSelect
export default function SearchBar(props) {
    //props
    const {
        slot1,
        slot2,
        slot3,
        type,
        dbSkills,
        urlModifier,
        setType, 
        setUrlModifier,
        setSearchQuery,
        setName,
        setEquipmentDisplay,
        setSlot1,
        setSlot2,
        setSlot3,
    } = props
    //states
    const [baseStatQuery, setBaseStatQuery] = useState('')
    const [typeQuery, setTypeQuery] = useState('"type":"head"')
    const [rankQuery, setRankQuery] = useState('')
    const [nameQuery, setNameQuery] = useState('')
    const [skillQuery, setSkillQuery] = useState('')
    const [elementQuery, setElementQuery] = useState('')
    const [slotQuery, setSlotQuery] = useState('')

    //Consolidates all passed in queries into one: searchQuery state
    useEffect(() =>
    {
        const query ='{' + typeQuery + nameQuery + baseStatQuery + rankQuery + skillQuery + elementQuery + slotQuery +'}'
        console.log("query: " + query)
        setSearchQuery(query)
    }, [typeQuery, baseStatQuery, rankQuery, nameQuery, skillQuery, elementQuery, slotQuery])

    //Resets queries on change of type
    useEffect(() =>
    {
        const initQuery = (urlModifier != 'charms' && urlModifier != 'decorations') ? '"type":"' + type + '"' : '"id":{"$gte":0}'
        setTypeQuery(initQuery)
        setNameQuery('')
        setRankQuery('')
        setSkillQuery('')
        setBaseStatQuery('')
        setElementQuery('')
        setEquipmentDisplay('')
        setSlotQuery('')
        setSlot1(0)
        setSlot2(0)
        setSlot3(0)
    }, [urlModifier])

    return (
        <>
        <div class="search_window">
            <h2>Search</h2>
            <TypeSelect setType={setType} setUrlModifier={setUrlModifier} setTypeQuery={setTypeQuery}/>
            {urlModifier != 'charms' && <NameSearch setName={setName}/>}
            {urlModifier=='armor' && <RankSelect setRankQuery={setRankQuery}/>}
            {(urlModifier=='armor' || urlModifier=='charms' || urlModifier=='decorations') && <SkillSelect dbSkills={dbSkills} urlModifier={urlModifier} setSkillQuery={setSkillQuery}/>}
            {(urlModifier =='armor' || urlModifier=='weapons') &&
            <SlotSelect slot1={slot1} slot2={slot2} slot3={slot3} setSlot1={setSlot1} setSlot2={setSlot2} setSlot3={setSlot3} setSlotQuery={setSlotQuery}/>}
            {(urlModifier=='armor' || urlModifier=='weapons') && <BaseStatSearch urlModifier={urlModifier} setBaseStatQuery={setBaseStatQuery}/>}
            {urlModifier=='weapons' && <ElementSearch urlModifier={urlModifier} setElementQuery={setElementQuery}/>}
            
        </div>
        </>
    )
}
