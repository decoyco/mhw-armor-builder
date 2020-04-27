import React from 'react'

export default function EquipmentDisplay(props) {
    const {
        urlModifier,
        equipmentDisplay
    } = props
    return (
        <div>
            <h3>{equipmentDisplay.name}</h3>
            {
                (urlModifier == 'armor' && equipmentDisplay.defense) 
                &&
                <>
                <div>Def: {equipmentDisplay.defense.base}</div>
                <div>
                Skills:
                {equipmentDisplay.skills.map(skill =>
                (
                    <li key={skill.id}>{skill.skillName} : {skill.level}</li>
                ))}
                </div>
                <div>
                    Slots:
                    {equipmentDisplay.slots.map(slot =>
                    (
                        <li key={slot.rank}>Lv{slot.rank}</li>
                    ))}
                </div>
                </>
            }
            {
                (urlModifier == 'weapons' && equipmentDisplay.attack)
                &&
                <>
                <div>Atk: {equipmentDisplay.attack.display}</div>
                {equipmentDisplay.attributes.affinity ? 
                    <div>Affinity: {equipmentDisplay.attributes.affinity}%</div> :
                    <></>}
                {(equipmentDisplay.elements[0] ?
                    <div>{equipmentDisplay.elements[0].type.charAt(0).toUpperCase() + equipmentDisplay.elements[0].type.slice(1)} : {equipmentDisplay.elements[0].hidden ?
                     '(' + equipmentDisplay.elements[0].damage + ')' :
                        equipmentDisplay.elements[0].damage}</div>:
                        <></>)}
                </>
            }
            {
                (urlModifier == 'charms' && equipmentDisplay.ranks)
                &&
                <div>
                Skills:
                {equipmentDisplay.ranks[equipmentDisplay.ranks.length-1].skills.map(skill =>
                (
                    <li key={skill.id}>{skill.skillName} : {skill.level}</li>
                ))}
                </div>
            }
            {
                (urlModifier == 'decorations' && equipmentDisplay.slot)
                &&
                <div>
                Skills:
                {equipmentDisplay.skills.map(skill =>
                (
                    <li key={skill.id}>{skill.skillName} : {skill.level}</li>
                ))}
                </div>
            }
        </div>
    )
}
