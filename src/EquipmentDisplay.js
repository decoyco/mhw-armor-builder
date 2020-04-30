import React from 'react'
//Creates window that shows the stats of the last piece of equipment that you have moused over in the results
export default function EquipmentDisplay(props) {
    const {
        urlModifier,
        equipmentDisplay
    } = props
    return (
        <div class="view_equip_window">
            <h3>{equipmentDisplay.name}</h3>
            {
                //if ARMOR display def, skills, and slots
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
                        <li key={Math.random()}>Lv{slot.rank}</li>
                    ))}
                </div>
                </>
            }
            {
                //if WEAPON display atk, element, and slots
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
                <div>
                    Slots:
                    {equipmentDisplay.slots.map(slot =>
                    (
                        <li key={Math.random()}>Lv{slot.rank}</li>
                    ))}
                </div>
                </>
            }
            {
                //if CHARM display skills
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
                //if DECORATION display skills
                (urlModifier === 'decorations' && equipmentDisplay.slot)
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
