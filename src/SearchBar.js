import React, {useState, useEffect} from 'react'
import TypeSelect from './TypeSelect'
import BaseStatSearch from './BaseStatSearch'

export default function SearchBar(props) {
    const {
        urlModifier,
        setType, 
        setUrlModifier,
        setSearchQuery
    } = props
    const [baseStatQuery, setBaseStatQuery] = useState('')
    const [typeQuery, setTypeQuery] = useState('"type":"head"')

    useEffect(() =>
    {
        const query ='{' + typeQuery + baseStatQuery + '}'
        setSearchQuery(query)
    }, [typeQuery, baseStatQuery])

    return (
        <>
        {
        //<NameSearch />
        //<RankInclude /><RankInclude /><RankInclude />
        }
        <TypeSelect setType={setType} setUrlModifier={setUrlModifier} setTypeQuery={setTypeQuery}/>
        {
        //<SkillSelect />
        //<SlotSelect /><SlotSelect /><SlotSelect />
        (urlModifier=='armor' || urlModifier=='weapons') && <BaseStatSearch urlModifier={urlModifier} setBaseStatQuery={setBaseStatQuery}/>
        //<ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /> 
        }
        </>
    )
}
