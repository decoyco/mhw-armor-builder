import React from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'
import { render } from '@testing-library/react'

//Creates query to search for equipment by specified type, also sets the urlModifier state based on the type state
export default function TypeSelect(props) {
    const {
        setTypeQuery,
        setType, 
        setUrlModifier
    } = props
    function handleOnChange(e)
    {
        let query
        let type
        if(e.target.value==="head" || e.target.value==="chest" || e.target.value==="gloves" || e.target.value==="waist" || e.target.value==="legs")
        {
            type="armor"
            query = '"type":' + '"' + e.target.value + '"'
            setType(e.target.value)
        }
        else if (e.target.value==="great-sword" || e.target.value==="long-sword" || e.target.value==="sword-and-shield" || e.target.value==="dual-blades" || e.target.value==="hammer"
                || e.target.value==="hunting-horn" || e.target.value==="lance" || e.target.value==="gunlance" || e.target.value==="switch-axe" || e.target.value==="charge-blade"
                || e.target.value==="head" || e.target.value==="insect-glaive" || e.target.value==="light-bowgun" || e.target.value==="heavy-bowgun" || e.target.value==="bow")
        {
            type="weapons"
            query = '"type":' + '"' + e.target.value + '"'
            setType(e.target.value)
        }
        else if(e.target.value==="charm")
        {
            type="charms"
            query = '"id":{"$gte":0}'
            setType('charms')
        }
        else if(e.target.value==="decoration")
        {
            type="decorations"
            query = '"id":{"$gte":0}'   
            setType('decorations')
        }
        setUrlModifier(type)
        setTypeQuery(query)
    }
    return (
        <>
        <div class="input_row">
        <label>Type: </label>
        <select onChange={handleOnChange} size="2">
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
            <option  value="decoration">Decorations</option>
        </select>
        </div>
        </>
    )
}
