import React, {useState, useEffect} from 'react'
import GetEquipmentStats from './GetEquipmentStats'

export default function EquipmentStats(props) {
    const {
        head,
        chest,
        gloves,
        waist,
        boots,
        weapon,
        charm
    } = props
    const {
        t_attack,
        t_defense,
        t_skills,
        t_affinity
    } = GetEquipmentStats(head,chest,gloves,waist,boots,weapon,charm)

    const [attack, setAttack] = useState('0')
    const [defense, setDefense] = useState('0')
    const [affinity, setAffinity] = useState('0')
    const [skills, setSkills] = useState('')

    useEffect(() => {
        setDefense(t_defense)
    }, [t_defense])

    return (
        <div>
            {defense}
        </div>
    )
}
