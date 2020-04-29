import React from 'react'
import { render } from 'react-dom'

export default function SlotSelect(props) {
    const{
        slot1,
        slot2,
        slot3,
        setSlot1,
        setSlot2,
        setSlot3,
        setSlotQuery
    } = props

    function handleChange1(e)
    {
        let query = ''
        let slots
        if(e.target.value == 0)
        {
            setSlot1(0)
            setSlot2(0)
            setSlot3(0)
            slots = 0
        }
        else
        {
            setSlot1(e.target.value)
            slots=1
            if(slot2 > 0)
                slots++
            if(slot3 > 0)
                slots++
            
        }
        query = ',"slots":{"$size":{"$gte":'+ slots +'}}'
        setSlotQuery(query)
    }
    function handleChange2(e)
    {
        let query = ''
        let slots
        if(e.target.value == 0)
        {
            slots=1
            setSlot2(0)
            setSlot3(0)
        }
        else
        {
            setSlot2(e.target.value)
            slots=2
            if(slot3 > 0)
                slots++
            
        }
        query = ',"slots":{"$size":{"$gte":'+ slots +'}}'
        setSlotQuery(query)
    }
    function handleChange3(e)
    {
        let slots
        if(e.target.value == 0)
        {
            setSlot3(0)
            slots = 2
        }
        else
        {
            setSlot3(e.target.value)
            slots = 3
        }
        const query = ',"slots":{"$size":{"$gte":'+slots+'}}'
        setSlotQuery(query)
    }
    return (
        <>
        <div>
            <label>Slot: </label>
            <select onChange={handleChange1}>
                <option value='0'></option>
                <option value='1'>Lv1</option>
                <option value='2'>Lv2</option>
                <option value='3'>Lv3</option>
                <option value='4'>Lv4</option>
            </select>
            {(slot1 > 0 &&
            <select onChange={handleChange2}>
                <option value='0'></option>
                <option value='1'>Lv1</option>
                <option value='2'>Lv2</option>
                <option value='3'>Lv3</option>
                <option value='4'>Lv4</option>
            </select>
            )}
            {(slot2 > 0 &&
            <select onChange={handleChange3}>
                <option value='0'></option>
                <option value='1'>Lv1</option>
                <option value='2'>Lv2</option>
                <option value='3'>Lv3</option>
                <option value='4'>Lv4</option>
            </select>
            )}
        </div>
        </>
    )
}
