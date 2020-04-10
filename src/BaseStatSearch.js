import React, {useEffect, useState} from 'react'

export default function BaseStatSearch(props) {
    const {
        setBaseStatQuery,
        urlModifier
    } = props

    const [selectValue, setSelectValue] = useState('0')

    function handleOnChange(e)
    {
        setSelectValue(e.target.value)
        const query = urlModifier=='armor' ? ',"defense.base":{"$gt":' + e.target.value + '}' : ',"attack.display":{"$gt":' + e.target.value + '}'
        setBaseStatQuery(query)
    }

    useEffect(()=>
    {
        const query = urlModifier=='armor' ? ',"defense.base":{"$gt":' + selectValue + '}' : ',"attack.display":{"$gt":' + selectValue + '}'
        setBaseStatQuery(query)
    }, [urlModifier])

    return (
        <>
            <label>{urlModifier == 'armor' ? "Base Defense:" : "Base Attack:"}</label>
            <input defaultValue="0" onChange={handleOnChange} type="number"></input>
        </>
    )
}
