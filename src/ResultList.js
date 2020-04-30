import React from 'react'
//Creates list of buttons of equipment in the results state, also handles on click actions of these buttons
export default function ResultList(props) {
    const {
        loading,
        decos,
        weaponSlots,
        headSlots,
        chestSlots,
        glovesSlots,
        waistSlots,
        bootsSlots,
        slotSelect,
        type,
        results,
        setHead,
        setChest,
        setGloves,
        setWaist,
        setBoots,
        setWeapon,
        setCharm,
        setEquipmentDisplay,
        setDecos
    } = props
    function handleOnClick(e)
    {
        const equip = JSON.parse(e.target.value)
        if(type == "head")
        {
            setHead(equip)
        }
        else if(type=="chest")
        {
            setChest(equip)
        }
        else if(type=="gloves")
        {
            setGloves(equip)
        }
        else if(type=="waist")
        {
            setWaist(equip)
        }
        else if(type=="legs")
        {
            setBoots(equip)
        }
        else if(type=="charms")
        {
            setCharm(equip)
        }
        else if(type=="decorations")
        {
            const equipType = slotSelect.split(' ')[0]
            const slotKey = slotSelect.split(' ')[1]
            if(equip.slot <= slotKey.charAt(0))
            {
                if(equipType == 'weapon')
                {
                    weaponSlots.set(slotKey, equip)
                }
                else if(equipType == 'head')
                {
                    headSlots.set(slotKey, equip)
                }
                else if(equipType == 'chest')
                {
                    chestSlots.set(slotKey, equip)
                }
                else if(equipType == 'gloves')
                {
                    glovesSlots.set(slotKey, equip)
                }
                else if(equipType == 'waist')
                {
                    waistSlots.set(slotKey, equip)
                }
                else if(equipType == 'boots')
                {
                    bootsSlots.set(slotKey, equip)
                }
                setDecos([...decos, equip])
            }
        }
        else
        {
            setWeapon(equip)
        }
    }

    function handleOnMouseOver(e)
    {
        const equip = JSON.parse(e.target.value)
        setEquipmentDisplay(equip)
    }
    return (
        <>
        <div class="result_window">
            {
                loading ? <label>Loading...</label> :
                results.map(equipment =>
                (
                    <div key={equipment.id}>
                        <button class="result_button" onClick={handleOnClick} value={JSON.stringify(equipment)} onMouseOver={handleOnMouseOver}>
                            {equipment.name}                
                        </button>
                    </div>
                ))
            }
        </div>
        </>
    )
}
