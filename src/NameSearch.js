import React from 'react'

export default function NameSearch(props) {
    const {
        setNameQuery
    } = props

    function handleOnChange(e)
    {
        let query = ""
        if(e.target.value != "")
            query = ',"name":{"$like":"'+e.target.value+'%"}'
        setNameQuery(query)
    }
    return (
        <>
            <label>Name:</label>
            <input type="text" onChange={handleOnChange}></input>
        </>
    )
}
