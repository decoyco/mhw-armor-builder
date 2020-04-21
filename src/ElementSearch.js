import React, {useState, useEffect} from 'react'

export default function ElementSearch(props) {
    const {
        urlModifier,
        setElementQuery
    } = props
    const [element, setElement] = useState('')
    const [value, setValue] = useState('0')
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        let query = ""
        if(urlModifier === 'weapons' && element !== "" && value >= 0)
        {
            query = ',"elements.type":"' + element + '","elements.damage":{"$gte":' + value + '},"elements.hidden":' + hidden
        }
        setElementQuery(query)
    }, [element, value, hidden, urlModifier])

    function handleElementChange(e)
    {
        setElement(e.target.value)
    }
    function handleValueChange(e)
    {
        if(e.target.value !== "")
            setValue(e.target.value)
    }
    function handleHiddenChange(e)
    {
        setHidden(!hidden)
    }

    return (
        <>
        <div>
            <label>Element:</label>
            <select onChange={handleElementChange}>
                <option value=""></option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="ice">Ice</option>
                <option value="thunder">Thunder</option>
                <option value="dragon">Dragon</option>
                <option value="blast">Blast</option>
                <option value="poison">Poison</option>
                <option value="sleep">Sleep</option>
                <option value="paralysis">Paralysis</option>
                <option value="stun">Stun</option>
            </select>
            <input onChange={handleValueChange} type="number" defaultValue="0"></input>
            <input onChange={handleHiddenChange} type="checkbox"></input>
            <label>Hidden</label>
        </div>
        </>
    )
}
