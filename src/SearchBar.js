import React, {useState, useEffect} from 'react'
import TypeSelect from './TypeSelect'
import BaseStatSearch from './BaseStatSearch'
import RankSelect from './RankSelect'
import NameSearch from './NameSearch'
import SkillSelect from './SkillSelect'
import ElementSearch from './ElementSearch'
import { render } from '@testing-library/react'

export default function SearchBar(props) {
    //props
    const {
        type,
        dbSkills,
        urlModifier,
        setType, 
        setUrlModifier,
        setSearchQuery
    } = props
    //states
    const [baseStatQuery, setBaseStatQuery] = useState('')
    const [typeQuery, setTypeQuery] = useState('"type":"head"')
    const [rankQuery, setRankQuery] = useState('')
    const [nameQuery, setNameQuery] = useState('')
    const [skillQuery, setSkillQuery] = useState('')
    const [elementQuery, setElementQuery] = useState('')

    useEffect(() =>
    {
        const query ='{' + typeQuery + nameQuery + baseStatQuery + rankQuery + skillQuery + elementQuery + '}'
        console.log("query: " + query)
        setSearchQuery(query)
    }, [typeQuery, baseStatQuery, rankQuery, nameQuery, skillQuery, elementQuery])

    useEffect(() =>
    {
        const initQuery = urlModifier != 'charms' ? '"type":"' + type + '"' : '"id":{"$gte":0}'
        setTypeQuery(initQuery)
        setNameQuery('')
        setRankQuery('')
        setSkillQuery('')
        setBaseStatQuery('')
        setElementQuery('')
    }, [urlModifier])

    return (
        <>
        <TypeSelect setType={setType} setUrlModifier={setUrlModifier} setTypeQuery={setTypeQuery}/>
        {urlModifier != 'charms' && <NameSearch setNameQuery={setNameQuery}/>}
        {urlModifier=='armor' && <RankSelect setRankQuery={setRankQuery}/>}
        {(urlModifier=='armor' || urlModifier=='charms') && <SkillSelect dbSkills={dbSkills} urlModifier={urlModifier} setSkillQuery={setSkillQuery}/>}
        {
        //<SlotSelect /> IN PROGRESS, BUG FOUND http://mhw-db.com/armor?q={"$and":[{"slots.rank":2},{"slots.rank":1}]}
        }
        {(urlModifier=='armor' || urlModifier=='weapons') && <BaseStatSearch urlModifier={urlModifier} setBaseStatQuery={setBaseStatQuery}/>}
        {//<ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /> 
        }
        {urlModifier=='weapons' && <ElementSearch urlModifier={urlModifier} setElementQuery={setElementQuery}/>}
        
        </>
    )
}
