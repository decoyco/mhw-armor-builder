import React from 'react'

export default function ResultList(props) {
    const {
        results
    } = props
    return (
        <div>
            {results.map(equipment =>{
                return <div key={equipment.name}>{equipment.name}</div>
            })}
        </div>
    )
}
