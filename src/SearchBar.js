import React, {useState, useEffect} from 'react'
import TypeSelect from './TypeSelect'
import BaseStatSearch from './BaseStatSearch'
import RankSelect from './RankSelect'
import NameSearch from './NameSearch'
import SkillSelect from './SkillSelect'

export default function SearchBar(props) {
    //props
    const {
        skills,
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

    useEffect(() =>
    {
        const query ='{' + typeQuery + nameQuery + baseStatQuery + rankQuery + skillQuery +'}'
        setSearchQuery(query)
    }, [typeQuery, baseStatQuery, rankQuery, nameQuery, skillQuery])

    return (
        <>
        <NameSearch setNameQuery={setNameQuery}/>
        <TypeSelect setType={setType} setUrlModifier={setUrlModifier} setTypeQuery={setTypeQuery}/>
        {urlModifier=='armor' && <RankSelect setRankQuery={setRankQuery}/>}
        {(urlModifier=='armor' || urlModifier=='charms') && <SkillSelect skills={skills} urlModifier={urlModifier} setSkillQuery={setSkillQuery}/>}
        {
        //<SlotSelect /><SlotSelect /><SlotSelect />
        (urlModifier=='armor' || urlModifier=='weapons') && <BaseStatSearch urlModifier={urlModifier} setBaseStatQuery={setBaseStatQuery}/>
        //<ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /> 
        }
        </>
    )
}
