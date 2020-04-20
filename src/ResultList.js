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
        switch (type) {
            case 'head':
                setHead(e.target.value)
                break;
            case 'chest':
                setChest(e.target.value)
                break;
            case 'gloves':
                setGloves(e.target.value)
                break;
            case 'waist':
                setWaist(e.target.value)
                break;
            case 'legs':
                setBoots(e.target.value)
                break;
            case '':
                setCharm(e.target.value)
                break;
            default:
                setWeapon(e.target.value)
                break;
        }
    }
    return (
        <>
            {
                results.map(equipment =>
                (
                    <div><button key={equipment.id} onClick={handleOnClick} value={equipment}>{equipment.name}</button></div>
                ))
            }
        </>
    )
}
