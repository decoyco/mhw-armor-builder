import React from 'react'

export default function ResultList(props) {
    const {
        type,
        results,
        setHead,
        setChest,
        setGloves,
        setWaist,
        setBoots,
        setWeapon,
        setCharm
    } = props
    function handleOnClick(e)
    {
        const equip = JSON.parse(e.target.value)
        // switch (type) {
        //     case "head":
        //         setHead(e.target.value)
        //         break;
        //     case 'chest':
        //         setChest(e.target.value)
        //         break;
        //     case 'gloves':
        //         setGloves(e.target.value)
        //         break;
        //     case 'waist':
        //         setWaist(e.target.value)
        //         break;
        //     case 'legs':
        //         setBoots(e.target.value)
        //         break;
        //     case '':
        //         setCharm(e.target.value)
        //         break;
        //     default:
        //         setWeapon(e.target.value)
        //         break;
        // }
        if(type == "head")
            setHead(equip)
        else if(type=="chest")
            setChest(equip)
        else if(type=="gloves")
            setGloves(equip)
        else if(type=="waist")
            setWaist(equip)
        else if(type=="legs")
            setBoots(equip)
        else if(type=="")
            setCharm(equip)
        else
            setWeapon(equip)
    }
    return (
        <>
            {
                results.map(equipment =>
                (
                    <div key={equipment.id}><button onClick={handleOnClick} value={JSON.stringify(equipment)}>{equipment.name}</button></div>
                ))
            }
        </>
    )
}
