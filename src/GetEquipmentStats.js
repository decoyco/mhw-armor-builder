import React, {useState, useEffect} from 'react'
import { render } from '@testing-library/react'
import axios from 'axios'

export default function GetEquipmentStats(head,chest,gloves,waist,boots,weapon,charm,weaponSlots,headSlots,chestSlots,glovesSlots,waistSlots,bootsSlots,skills,decos, dbSkills) {
    const [t_attack, setTAttack] = useState(0)
    const [t_defense, setTDefense] = useState(0)
    const [t_affinity, setTAffinity] = useState(0)
    const [t_elementValue, setTElementValue] = useState(0)
    const [t_element, setTElement] = useState('')
    const [t_hidden, setTHidden] = useState(false)
    const [t_armorSkills, setTArmorSkills] = useState(new Map())
    const [t_decoSkills, setTDecoSkills] = useState(new Map())
    const [t_weaponSlots, setTWeaponSlots] = useState(new Map())
    const [t_headSlots, setTHeadSlots] = useState(new Map())
    const [t_chestSlots, setTChestSlots] = useState(new Map())
    const [t_glovesSlots, setTGlovesSlots] = useState(new Map())
    const [t_waistSlots, setTWaistSlots] = useState(new Map())
    const [t_bootsSlots, setTBootsSlots] = useState(new Map())

    useEffect(() => {
        let temp_defense = 0
        let temp_attack = 0
        let temp_affinity = 0
        let temp_elementValue = 0
        let temp_hidden = false
        let temp_skills = new Map()
        let temp_weaponSlots = new Map()
        let temp_headSlots = new Map()
        let temp_chestSlots = new Map()
        let temp_glovesSlots = new Map()
        let temp_waistSlots = new Map()
        let temp_bootsSlots = new Map()
        let temp_element = ''
        if(head !== '')
        {
            temp_defense += head.defense.base
            head.skills.map(skill =>
                {
                    temp_skills.set(skill.skillName, skill.level)
                })
            if(head.slots)
            head.slots.map(slot =>
                {
                    let i = 0
                    while(temp_headSlots.has(slot.rank+''+i))
                        i++
                    temp_headSlots.set(slot.rank+''+i, '')
                })
        }
        if(chest !== '')
        {
            temp_defense += chest.defense.base
            chest.skills.map(skill =>
                {
                    temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                })
            if(chest.slots)
            chest.slots.map(slot =>
                {
                    let i = 0
                    while(temp_chestSlots.has(slot.rank+''+i))
                        i++
                    temp_chestSlots.set(slot.rank+''+i, '')
                })
            
        }
        if(gloves !== '')
        {
            temp_defense += gloves.defense.base
            gloves.skills.map(skill =>
                {
                    temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                })
            if(gloves.slots)
            gloves.slots.map(slot =>
                {
                    let i = 0
                    while(temp_glovesSlots.has(slot.rank+''+i))
                        i++
                    temp_glovesSlots.set(slot.rank+''+i, '')
                })
        }
        if(waist !== '')
        {
            temp_defense += waist.defense.base
            waist.skills.map(skill =>
                {
                    temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                })
            if(waist.slots)
            waist.slots.map(slot =>
                {
                    let i = 0
                    while(temp_waistSlots.has(slot.rank+''+i))
                        i++
                    temp_waistSlots.set(slot.rank+''+i, '')
                })
        } 
        if(boots !== '')
        {
            temp_defense += boots.defense.base
            boots.skills.map(skill =>
                {
                    temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                })
            if(boots.slots)
            boots.slots.map(slot =>
                {
                    let i = 0
                    while(temp_bootsSlots.has(slot.rank+''+i))
                        i++
                    temp_bootsSlots.set(slot.rank+''+i, '')
                })
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
            if(weapon.slots)
                weapon.slots.map(slot =>
                    {
                        let i = 0
                        while(temp_weaponSlots.has(slot.rank+''+i))
                            i++
                        temp_weaponSlots.set(slot.rank+''+i, '')
                    })
        }
        if(charm !== '')
        {
            charm.ranks[charm.ranks.length-1].skills.map(skill =>
                {
                    temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                })
        }

        setTWeaponSlots(temp_weaponSlots)
        setTHeadSlots(temp_headSlots)
        setTChestSlots(temp_chestSlots)
        setTGlovesSlots(temp_glovesSlots)
        setTWaistSlots(temp_waistSlots)
        setTBootsSlots(temp_bootsSlots)
        setTDefense(temp_defense)
        setTAttack(temp_attack)
        setTElement(temp_element)
        setTElementValue(temp_elementValue)
        setTHidden(temp_hidden)
        setTArmorSkills(temp_skills)
        setTAffinity(temp_affinity)
    }, [head,chest,gloves,waist,boots,weapon,charm])

    useEffect(() => {
        setTDecoSkills(new Map())
        let temp_skills = new Map();
        [...headSlots.keys()].map(slot=>
            {
                if(headSlots.get(slot))
                {
                    const deco = headSlots.get(slot)
                    deco.skills.map(skill =>
                        {
                            console.log(headSlots.get(slot))
                            temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                        })
                }
            });
        [...chestSlots.keys()].map(slot=>
            {
                if(chestSlots.get(slot))
                {
                    const deco = chestSlots.get(slot)
                    deco.skills.map(skill =>
                        {
                            temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                        })
                }
            });
        [...glovesSlots.keys()].map(slot=>
            {
                if(glovesSlots.get(slot))
                {
                    const deco = glovesSlots.get(slot)
                    deco.skills.map(skill =>
                        {
                            temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                        })
                }
            });
        [...waistSlots.keys()].map(slot=>
            {
                if(waistSlots.get(slot))
                {
                    const deco = waistSlots.get(slot)
                    deco.skills.map(skill =>
                        {
                            temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                        })
                }
            });
        [...bootsSlots.keys()].map(slot=>
            {
                if(bootsSlots.get(slot))
                {
                    const deco = bootsSlots.get(slot)
                    deco.skills.map(skill =>
                        {
                            temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                        })
                }
            });
        [...weaponSlots.keys()].map(slot=>
            {
                if(weaponSlots.get(slot))
                {
                    const deco = weaponSlots.get(slot)
                    deco.skills.map(skill =>
                        {
                            temp_skills.set(skill.skillName, temp_skills.get(skill.skillName) ? temp_skills.get(skill.skillName) + skill.level : skill.level)
                        })
                }
            });
        setTDecoSkills(temp_skills)
        render()
    }, [headSlots,chestSlots,glovesSlots,waistSlots,bootsSlots,weaponSlots,decos])
    return {
        t_attack,
        t_element,
        t_elementValue,
        t_hidden,
        t_defense,
        t_affinity,
        t_weaponSlots,
        t_headSlots,
        t_chestSlots,
        t_glovesSlots,
        t_waistSlots,
        t_bootsSlots,
        t_armorSkills,
        t_decoSkills
    }
}

