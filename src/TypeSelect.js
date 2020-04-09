import React, {useState} from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

export default function TypeSelect(props) {
    const {setType, setUrlModifier} = props
    function handleOnChange(e)
    {
        let type
        if(e.target.value==="head" && e.target.value==="chest" && e.target.value==="gloves" && e.target.value==="waist" && e.target.value==="legs")
        {
            type="armor"
        }
        else if (e.target.value==="great-sword" && e.target.value==="long-sword" && e.target.value==="sword-and-shield" && e.target.value==="dual-blades" && e.target.value==="hammer"
                && e.target.value==="hunting-horn" && e.target.value==="lance" && e.target.value==="gunlance" && e.target.value==="switch-axe" && e.target.value==="charge-blade"
                && e.target.value==="head" && e.target.value==="insect-glaive" && e.target.value==="light-bowgun" && e.target.value==="heavy-bowgun" && e.target.value==="bow")
        {
            type="weapon"
        }
        else if(e.target.value==="charm")
        {
            type="charm"
        }
        setUrlModifier(type)
        setType(e.target.value)
    }
    return (
        <>
        <label>Type</label>
        <select onChange={handleOnChange} >
            <option  value="head">Head</option>
            <option  value="chest">Chest</option>
            <option  value="gloves">Gloves</option>
            <option  value="waist">Waist</option>
            <option  value="legs">Legs</option>
            <option  value="great-sword">Great Sword</option>
            <option  value="long-sword">Long Sword</option>
            <option  value="sword-and-shield">Sword & Shield</option>
            <option  value="dual-blades">Dual Blades</option>
            <option  value="hammer">Hammer</option>
            <option  value="hunting-horn">Hunting Horn</option>
            <option  value="lance">Lance</option>
            <option  value="gunlance">Gunlance</option>
            <option  value="switch-axe">Switch Axe</option>
            <option  value="charge-blade">Charge Blade</option>
            <option  value="insect-glaive">Insect Glaive</option>
            <option  value="light-bowgun">Light Bowgun</option>
            <option  value="heavy-bowgun">Heavy Bowgun</option>
            <option  value="bow">Bow</option>
            <option  value="charm">Charm</option>
        </select>
        </>
    )
}
