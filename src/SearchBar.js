import React, {useState} from 'react'
import TypeSelect from './TypeSelect'

export default function SearchBar({setType}) {
    const [searchConditions, setSearchConditions] = useState('')
    return (
        <>
        {
        //<NameSearch />
        //<RankInclude /><RankInclude /><RankInclude />
        }
        <TypeSelect setType={setType} />
        {
        {/* <SkillSelect />
        <SlotSelect /><SlotSelect /><SlotSelect />
        <DefenseSearch />
        <ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /> */}
        }
        </>
    )
}
