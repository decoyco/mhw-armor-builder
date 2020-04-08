import React from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

export default function TypeSelect() {
    function handleOnChange(value)
    {
        let type
        if(value=="head" && value=="chest" && value=="gloves" && value=="waist" && value=="legs")
        {
            type="armor"
        }
        else if (value=="great-sword" && value=="long-sword" && value=="sword-and-shield" && value=="dual-blades" && value=="hammer"
                && value=="hunting-horn" && value=="lance" && value=="gunlance" && value=="switch-axe" && value=="charge-blade"
                && value=="head" && value=="insect-glaive" && value=="light-bowgun" && value=="heavy-bowgun" && value=="bow")
        {
            type="weapon"
        }
        else if(value=="charm")
        {
            type="charm"
        }
        setType(type)
    }
    return (
        <>
        <label>Type</label>
        <select>
            <option onChange={handleOnChange(value)} value="head">Head</option>
            <option onChange={handleOnChange(value)} value="chest">Chest</option>
            <option onChange={handleOnChange(value)} value="gloves">Gloves</option>
            <option onChange={handleOnChange(value)} value="waist">Waist</option>
            <option onChange={handleOnChange(value)} value="legs">Legs</option>
            <option onChange={handleOnChange(value)} value="great-sword">Great Sword</option>
            <option onChange={handleOnChange(value)} value="long-sword">Long Sword</option>
            <option onChange={handleOnChange(value)} value="sword-and-shield">Sword & Shield</option>
            <option onChange={handleOnChange(value)} value="dual-blades">Dual Blades</option>
            <option onChange={handleOnChange(value)} value="hammer">Hammer</option>
            <option onChange={handleOnChange(value)} value="hunting-horn">Hunting Horn</option>
            <option onChange={handleOnChange(value)} value="lance">Lance</option>
            <option onChange={handleOnChange(value)} value="gunlance">Gunlance</option>
            <option onChange={handleOnChange(value)} value="switch-axe">Switch Axe</option>
            <option onChange={handleOnChange(value)} value="charge-blade">Charge Blade</option>
            <option onChange={handleOnChange(value)} value="insect-glaive">Insect Glaive</option>
            <option onChange={handleOnChange(value)} value="light-bowgun">Light Bowgun</option>
            <option onChange={handleOnChange(value)} value="heavy-bowgun">Heavy Bowgun</option>
            <option onChange={handleOnChange(value)} value="bow">Bow</option>
            <option onChange={handleOnChange(value)} value="charm">Charm</option>
        </select>
        </>
    )
}
