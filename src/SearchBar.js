import React from 'react'

export default function SearchBar() {
    const [searchConditions, setSearchConditions] = useState('')
    return (
        <>
        <NameSearch />
        <RankInclude /><RankInclude /><RankInclude />
        <TypeSelect />
        <SkillSelect />
        <SlotSelect /><SlotSelect /><SlotSelect />
        <DefenseSearch />
        <ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch /><ResistanceSearch />
        </>
    )
}
