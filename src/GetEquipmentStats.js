import React, {useState, useEffect} from 'react'
import { render } from '@testing-library/react'

export default function GetEquipmentStats(head,chest,gloves,waist,boots,weapon,charm) {
    const [t_attack, setTAttack] = useState(0)
    const [t_defense, setTDefense] = useState(0)
    const [t_affinity, setTAffinity] = useState(0)
    const [t_elementValue, setTElementValue] = useState(0)
    const [t_element, setTElement] = useState('')
    const [t_hidden, setTHidden] = useState(false)
    const [t_skills, setTSkills] = useState('')

    useEffect(() => {
        let temp_defense = 0
        let temp_attack = 0
        let temp_affinity = 0
        let temp_elementValue = 0
        let temp_hidden = false
        let temp_element = ''
        if(head !== '')
        {
            temp_defense += head.defense.base
        }
        if(chest !== '')
        {
            temp_defense += chest.defense.base
        }
        if(gloves !== '')
        {
            temp_defense += gloves.defense.base
        }
        if(waist !== '')
        {
            temp_defense += waist.defense.base
        } 
        if(boots !== '')
        {
            temp_defense += boots.defense.base
        }
        if(weapon !== '')
        {
            temp_attack += weapon.attack.display
            if(weapon.attributes.affinity)
                temp_affinity += weapon.attributes.affinity
            if(weapon.elements[0])
            {
                temp_element = weapon.elements[0].type
                temp_elementValue = weapon.elements[0].damage
                temp_hidden = weapon.elements[0].hidden
            }
        }
        setTDefense(temp_defense)
        setTAttack(temp_attack)
        setTElement(temp_element)
        setTElementValue(temp_elementValue)
        setTHidden(temp_hidden)
        setTAffinity(temp_affinity)
    }, [head,chest,gloves,waist,boots,weapon,charm])
    return {
        t_attack,
        t_element,
        t_elementValue,
        t_hidden,
        t_defense,
        t_affinity,
        t_skills
    }
}
