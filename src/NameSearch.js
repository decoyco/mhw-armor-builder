import React from 'react'
//Sets name state to be filtered in App.js
export default function NameSearch(props) {
    const {
        setName
    } = props

    function handleOnChange(e)
    {
        const change = e.target.value === '' ? ' ' : e.target.value
        setName(change)
    }
    return (
        <>
        <div>
            <label>Name: </label>
            <input type="text" onChange={handleOnChange}></input>
        </div>
        </>
    )
}
