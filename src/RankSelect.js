import React from 'react'
//Creates query to search via low, high, or master rank equipment
export default function RankSelect(props) {
    const 
    {
        setRankQuery
    } = props

    function handleOnChange(e)
    {
        let query = ""
        if(e.target.value !== "")
        {
            query = ',"rank":"' + e.target.value + '"'
        }
        setRankQuery(query)
    }
    return (
        <>
        <div class="input_row">
            <label>Rank: </label>
            <select onChange={handleOnChange}>
                <option value=""></option>
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="master">Master</option>
            </select>
        </div>
        </>
    )
}
