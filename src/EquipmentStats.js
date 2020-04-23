import React, {useState, useEffect} from 'react'
import GetEquipmentStats from './GetEquipmentStats'
import axios from 'axios'

export default function EquipmentStats(props) {
    const {
        head,
        chest,
        gloves,
        waist,
        boots,
        weapon,
        charm,
        dbSkills
    } = props
    const {
        t_attack,
        t_element,
        t_elementValue,
        t_hidden,
        t_defense,
        t_skills,
        t_affinity
    } = GetEquipmentStats(head,chest,gloves,waist,boots,weapon,charm, dbSkills)

    const [attack, setAttack] = useState(0)
    const [element, setElement] = useState('')
    const [elementValue, setElementValue] = useState('0')
    const [hidden, setHidden] = useState(false)
    const [defense, setDefense] = useState(0)
    const [affinity, setAffinity] = useState(0)
    const [skills, setSkills] = useState(new Map())
    const [skillValue, setSkillValue] = useState('')

    useEffect(() => {
        
        [...t_skills.keys()].map(skill =>{
            const db_skill = dbSkills.filter(s => s.name == skill)
            setSkillValue((t_skills.get(skill) > db_skill[0].ranks.length) ? db_skill[0].ranks.length.toString() + '(+' + (t_skills.get(skill) - db_skill[0].ranks.length).toString() + ')' : t_skills.get(skill))
        })

        setDefense(t_defense)
        setAttack(t_attack)
        setElement(t_element)
        setElementValue(t_elementValue)
        setHidden(t_hidden)
        setAffinity(t_affinity)
        setSkills(t_skills)
    }, [t_defense, t_attack, t_affinity, t_element, t_elementValue, t_hidden, t_skills])

    return (
        <>
            <div>
                Defense: {defense}
            </div>
            <div>
                Attack: {attack}
            </div>
            <div>
                {(element !== '' && elementValue !== 0) && element.charAt(0).toUpperCase() + element.slice(1) + ' :' + elementValue + (hidden ? "(Hidden)" : '')}
            </div>
            <div>
                Affinity: {affinity}
            </div>
            <div>
                Skills:
                {[...skills.keys()].map(skill =>
                (
                    <li key={skill}>{skill} : {skillValue}</li>
                ))}
            </div>
        </>
    )
}
