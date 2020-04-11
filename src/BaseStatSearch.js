import React, {useEffect, useState} from 'react'
import { render } from '@testing-library/react'

export default function BaseStatSearch(props) {
    const {
        setBaseStatQuery,
        urlModifier
    } = props

    const [selectValue, setSelectValue] = useState('0')

    function handleOnChange(e)
    {
        let value = e.target.value
        if(value == "" || value <= 0)
            value = "0"
        setSelectValue(e.target.value)
        const query = urlModifier=='armor' ? ',"defense.base":{"$gt":' + value + '}' : ',"attack.display":{"$gt":' + value + '}'
        setBaseStatQuery(query)
    }

    useEffect(()=>
    {
        let query
        switch(urlModifier){
            case 'armor': 
                query = ',"defense.base":{"$gt":0}'
                break;
            case 'weapons': 
                query = ',"attack.display":{"$gt":0}'
                break;
            default: 
                query = ''
                break;
        }
        console.log("query:" + query)
        setBaseStatQuery(query)
    }, [urlModifier])

    return (
        <>
            <label>{urlModifier == 'armor' ? "Base Defense:" : "Base Attack:"}</label>
            <input defaultValue="0" onChange={handleOnChange} type="number"></input>
        </>
    )
}
