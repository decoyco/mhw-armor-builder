import React, {useState, useEffect} from 'react'
import { render } from '@testing-library/react'

export default function SkillSelect(props) {
    const
    {
        urlModifier,
        dbSkills,
        setSkillQuery
    } = props
    const [skill, setSkill] = useState("")
    const [skillLevel, setSkillLevel] = useState("0")

    useEffect(() => {
        let query = ''
        if(skill !== "" && skillLevel >= 0)
        {
            query = (urlModifier==='charms' ? ',"ranks.' : ',"') + 'skills.skill":' + skill +
                    (urlModifier==='charms' ? '' : ',"skills.level":{"$gte":' + skillLevel + '}') 
        }
        setSkillQuery(query)
    }, [skill, skillLevel, urlModifier])

    function handleSkillChange(e)
    {
        setSkill(e.target.value)
    }

    function handleSkillLevelChange(e)
    {
        if(e.target.value !== "")
            setSkillLevel(e.target.value)
    }

    return (
        <>
            <div>
            <label>Skill: </label>
            <select onChange={handleSkillChange}>
                <option value="" selected="true"></option>
                {
                dbSkills.map(skill =>
                {
                   return <option key={skill.id} value={skill.id}>{skill.name}</option>
                })}
            </select>
            {(urlModifier !== "charms" && skill != '')&& <input onChange={handleSkillLevelChange} type="number" defaultValue="0"></input>}
            </div>
        </>
    )
}
