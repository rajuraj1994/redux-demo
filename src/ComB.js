import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const ComB = () => {
    const[gameName,setGameName]=useState('')
    const[player,setPlayer]=useState('')
    const dispatch=useDispatch()
    const changeName=()=>(
        dispatch({type:'CHANGE_GAME',payload:gameName})
    ) 

    const changePlayer=()=>(
        dispatch({type:'CHANGE_PLAYER',payload:player})
    )
    return (
        <>
            <h2>Form</h2>
            <input type="text" placeholder="Type Game Name" 
            onChange={(e)=>{setGameName(e.target.value)}}
            />
            <button onClick={changeName}>Change Name</button>
            <br/>
            <input type="text" placeholder="Player Name"
            onChange={(e)=>{setPlayer(e.target.value)}}
            />
            <button onClick={changePlayer}>Change Player Name</button>
        </>
    )
}

export default ComB
