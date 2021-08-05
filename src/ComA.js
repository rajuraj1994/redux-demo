import React from 'react'
import { useSelector } from 'react-redux'

const ComA = () => {
    const name=useSelector(store=>store.gameValue)
    return (
        <>
        <h2>The game name is {name.game} </h2>  
        <h2>The player name is {name.player}</h2>  
        </>
    )
}

export default ComA
