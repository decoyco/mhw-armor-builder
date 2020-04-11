import React, {useState, useEffect} from 'react'

export default function SkillSelect(props) {
    const
    {
        urlModifier,
        skills,
        setSkillQuery
    } = props
    const [skill, setSkill] = useState(1)
    const [skillLevel, setSkillLevel] = useState("0")

    useEffect(() => {
        let query = ""
        if(skill != "")
        {
            query = ',"skills":[{"skill":' + skill + ',"level":' + skillLevel + '}]'
        }
        setSkillQuery(query)
    }, [skill, skillLevel])

    function handleSkillChange(e)
    {
        setSkill(e.target.value)
    }

    function handleSkillLevelChange(e)
    {
        setSkillLevel(e.target.value)
    }

    return (
        <>
            <div>
            <label>Skill:</label>
            <select>
                {urlModifier != "charms" && <option value="" selected="true"></option>}
                {skills.map(skill =>
                {
                   return <option key={skill.skill} value={skill.skill}>{skill.name}</option>
                })}
            </select>
            <input type="number" defaultValue="1"></input>
            </div>
        </>
    )
}
