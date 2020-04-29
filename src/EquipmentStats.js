import React, {useState, useEffect} from 'react'
import GetEquipmentStats from './GetEquipmentStats'
import EquipmentDisplay from './EquipmentDisplay'
import axios from 'axios'

export default function EquipmentStats(props) {
    const {
        equipmentDisplay,
        urlModifier,
        decos,
        skills,
        weaponSlots,
        headSlots,
        chestSlots,
        glovesSlots,
        waistSlots,
        bootsSlots,
        head,
        chest,
        gloves,
        waist,
        boots,
        weapon,
        charm,
        dbSkills,
        setSlots,
        setHead,
        setChest,
        setGloves,
        setWaist,
        setBoots,
        setCharm,
        setWeapon,
        setWeaponSlots,
        setHeadSlots,
        setChestSlots,
        setGlovesSlots,
        setWaistSlots,
        setBootsSlots,
        setSkills,
        setSlotSelect,
    } = props
    
    const {
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
    } = GetEquipmentStats(head,chest,gloves,waist,boots,weapon,charm,weaponSlots,headSlots,chestSlots,glovesSlots,waistSlots,bootsSlots,skills,decos, dbSkills)

    const [attack, setAttack] = useState(0)
    const [element, setElement] = useState('')
    const [elementValue, setElementValue] = useState('0')
    const [hidden, setHidden] = useState(false)
    const [defense, setDefense] = useState(0)
    const [affinity, setAffinity] = useState(0)

    useEffect(() => {
        let temp_skills = new Map();
        [...t_armorSkills.keys()].map(skill=>
            {
                temp_skills.set(skill, t_armorSkills.get(skill))
            });
        [...t_decoSkills.keys()].map(skill=>
            {
                temp_skills.set(skill, temp_skills.get(skill) ? temp_skills.get(skill) + t_decoSkills.get(skill) : t_decoSkills.get(skill))
            });
        [...temp_skills.keys()].map(skill=>
            {
                const searchedSkill = dbSkills.filter(res => (res.name == skill))[0]
                temp_skills.set(skill, temp_skills.get(skill) > searchedSkill.ranks.length ? searchedSkill.ranks.length + '(+' + parseInt(temp_skills.get(skill) - searchedSkill.ranks.length) + ')' : temp_skills.get(skill))
            });
        setSkills(temp_skills);

        setDefense(t_defense)
        setAttack(t_attack)
        setElement(t_element)
        setElementValue(t_elementValue)
        setHidden(t_hidden)
        setAffinity(t_affinity)
        setWeaponSlots(t_weaponSlots)
        setHeadSlots(t_headSlots)
        setChestSlots(t_chestSlots)
        setGlovesSlots(t_glovesSlots)
        setWaistSlots(t_waistSlots)
        setBootsSlots(t_bootsSlots)
    }, [t_defense, t_attack, t_affinity, t_element, t_elementValue, t_hidden, t_armorSkills, t_decoSkills, t_weaponSlots, t_headSlots, t_chestSlots, t_glovesSlots, t_waistSlots, t_bootsSlots])

    function handleOnX(e)
    {
        if(e.target.value=='weapon')
            setWeapon('')
        if(e.target.value=='head')
            setHead('')
        if(e.target.value=='chest')
            setChest('')    
        if(e.target.value=='gloves')
            setGloves('')
        if(e.target.value=='waist')
            setWaist('')
        if(e.target.value=='boots')
            setBoots('')
        if(e.target.value=='charm')
            setCharm('')
    }

    function handleOnSlotSelect(e)
    {
        setSlotSelect(e.target.value)
    }

    return (
        <>
        <div class="equipped_window">
            <h2>Equipped</h2>
            <div>
                Weapon: 
                {(weapon.name &&<button onClick={handleOnX} value="weapon">{weapon.name} </button>)}
                {(weaponSlots &&
                    [...weaponSlots.keys()].map(slot=>
                    (
                        <li key={'weapon'+' '+slot}><button  value={'weapon'+' '+slot} onClick={handleOnSlotSelect}>Lv{slot.charAt(0)} :{weaponSlots.get(slot) != '' ? weaponSlots.get(slot).name : 'Empty'}</button></li>
                    ))    
                )}
            </div>
            <div>
                Head: 
                {(head.name && <button onClick={handleOnX} value="head">{head.name} </button>)}
                {(headSlots &&
                    [...headSlots.keys()].map(slot=>
                    (
                        <li key={'head'+' '+slot}><button  value={'head'+' '+slot} onClick={handleOnSlotSelect}>Lv{slot.charAt(0)} :{headSlots.get(slot) != '' ? headSlots.get(slot).name : 'Empty'}</button></li>
                    ))    
                )}
            </div>
            <div>
                Chest: 
                {(chest.name && <button onClick={handleOnX} value="chest">{chest.name} </button>)}
                {(chestSlots &&
                    [...chestSlots.keys()].map(slot=>
                    (
                       <li key={'chest'+' '+slot}><button  value={'chest'+' '+slot} onClick={handleOnSlotSelect}>Lv{slot.charAt(0)} :{chestSlots.get(slot) != '' ? chestSlots.get(slot).name : 'Empty'}</button></li>
                    ))    
                )}
            </div>
            <div>
                Gloves: 
                {(gloves.name && <button onClick={handleOnX} value="gloves">{gloves.name} </button>)}
                {(glovesSlots &&
                    [...glovesSlots.keys()].map(slot=>
                    (
                        <li key={'gloves'+' '+slot}><button key={'gloves'+' '+slot} value={'gloves'+' '+slot} onClick={handleOnSlotSelect}>Lv{slot.charAt(0)} :{glovesSlots.get(slot) != '' ? glovesSlots.get(slot).name : 'Empty'}</button></li>
                    ))    
                )}
            </div>
            <div>
                Waist: 
                {(waist.name && <button onClick={handleOnX} value="waist">{waist.name} </button>)}
                {(waistSlots &&
                    [...waistSlots.keys()].map(slot=>
                    (
                        <li key={'waist'+' '+slot}><button  value={'waist'+' '+slot} onClick={handleOnSlotSelect}>Lv{slot.charAt(0)} :{waistSlots.get(slot) != '' ? waistSlots.get(slot).name : 'Empty'}</button></li>
                    ))    
                )}
            </div>
            <div>
                Boots: 
                {(boots.name && <button onClick={handleOnX} value="boots">{boots.name} </button>)}
                {(bootsSlots &&
                    [...bootsSlots.keys()].map(slot=>
                    (
                        <li key={'boots'+' '+slot}><button  value={'boots'+' '+slot} onClick={handleOnSlotSelect}>Lv{slot.charAt(0)} :{bootsSlots.get(slot) != '' ? bootsSlots.get(slot).name : 'Empty'}</button></li>
                    ))    
                )}
            </div>
            <div>
                Charm: {charm.name} 
                {(charm.name && <button onClick={handleOnX} value="charm">X</button>)}
            </div>
            <div>
                Attack: {attack}
            </div>
            <div>
                {(element !== '' && elementValue !== 0) && element.charAt(0).toUpperCase() + element.slice(1) + ' :' + elementValue + (hidden ? "(Hidden)" : '')}
            </div>
            <div>
                Affinity: {affinity}%
            </div>
            <div>
                Defense: {defense}
            </div>
            <div>
                Skills:
                {[...skills.keys()].map(skill =>
                (
                    <li key={skill}>{skill} : {skills.get(skill)}</li>
                ))}
            </div>
            {
            equipmentDisplay == '' ? <div></div> :
            <EquipmentDisplay 
            urlModifier={urlModifier}
            equipmentDisplay={equipmentDisplay}
            />
        }
        </div>
        </>
    )
}
