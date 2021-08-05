import React from 'react'
import { useDispatch } from 'react-redux'

const Item = () => {
    const dispatch=useDispatch()
    const addItem=()=>(
        dispatch({type:'ADD_ITEM'})
    )

    const removeItem=()=>(
        dispatch({type:'REMOVE_ITEM'})
    )
    return (
        <>
        <h2>This is a item component</h2>  
        <button onClick={addItem}>Add Item</button>  
        <button onClick={removeItem}>Remove Item</button>
        </>
    )
}

export default Item
