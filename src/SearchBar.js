import React, {useState} from 'react'
import TypeSelect from './TypeSelect'

export default function SearchBar(props) {
    const {setType, setUrlModifier} = props
    const [searchConditions, setSearchConditions] = useState('')
    return (
        <>
        {
        //<NameSearch />
        //<RankInclude /><RankInclude /><RankInclude />
        }
        <TypeSelect setType={setType} setUrlModifier={setUrlModifier} />
        {/* <SkillSelect />
        <SlotSelect /><SlotSelect /><SlotSelect />
        <DefenseSearch />
        <ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /> */
        }
        </>
    )
}
