import React from 'react'

export default function ResultList(props) {
    const {
        results
    } = props
    return (
        <>
            {
                results.map(equipment =>
                (
                    <div key={equipment.name}>{equipment.name}</div>
                ))
            }
        </>
    )
}
