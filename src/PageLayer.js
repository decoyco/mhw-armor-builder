import React from 'react'
import ResultList from './ResultList'
import SearchBar from './SearchBar'

//Top layer for ResultList and SearchBar
export default function PageLayer(props) {
    const {
        slot1,
        slot2,
        slot3,
        dbSkills,
        urlModifier,
        setType, 
        setUrlModifier,
        setSearchQuery,
        setName,
        setEquipmentDisplay,
        setSlot1,
        setSlot2,
        setSlot3,
        loading,
        decos,
        weaponSlots,
        headSlots,
        chestSlots,
        glovesSlots,
        waistSlots,
        bootsSlots,
        slotSelect,
        type,
        results,
        setHead,
        setChest,
        setGloves,
        setWaist,
        setBoots,
        setWeapon,
        setCharm,
        setDecos
    } = props
    return (
        <>
        <div class="page_layer_container">
        <SearchBar
        slot1={slot1}
        slot2={slot2}
        slot3={slot3}
        type={type}
        dbSkills={dbSkills}
        urlModifier={urlModifier}
        setType={setType} 
        setUrlModifier={setUrlModifier}
        setSearchQuery={setSearchQuery}
        setName={setName}
        setEquipmentDisplay={setEquipmentDisplay}
        setSlot1={setSlot1}
        setSlot2={setSlot2}
        setSlot3={setSlot3}
        />
        <ResultList 
        loading={loading}
        decos={decos}
        weaponSlots={weaponSlots}
        headSlots={headSlots}
        chestSlots={chestSlots}
        glovesSlots={glovesSlots}
        waistSlots={waistSlots}
        bootsSlots={bootsSlots}
        slotSelect={slotSelect}
        urlModifier={urlModifier}
        type={type}
        results={results} 
        setHead={setHead}
        setChest={setChest}
        setGloves={setGloves}
        setWaist={setWaist}
        setBoots={setBoots}
        setWeapon={setWeapon}
        setCharm={setCharm}
        setEquipmentDisplay={setEquipmentDisplay}
        setDecos={setDecos}
        />
        </div>
        </>
    )
}
