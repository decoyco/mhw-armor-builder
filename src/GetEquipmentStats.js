import React, {useState, useEffect} from 'react'
import { render } from '@testing-library/react'

export default function GetEquipmentStats(head,chest,gloves,waist,boots,weapon,charm) {
    const [t_attack, setTAttack] = useState(0)
    const [t_defense, setTDefense] = useState(0)
    const [t_affinity, setTAffinity] = useState(0)
    const [t_skills, setTSkills] = useState('')

    useEffect(() => {
        let temp = 0
        if(head !== '')
        {
            temp += head.defense.base
        }
        setTDefense(temp)
    }, [head,chest,gloves,waist,boots,weapon,charm])
    return {
        t_attack,
        t_defense,
        t_affinity,
        t_skills
    }
}
