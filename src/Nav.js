import React from 'react'
import { useSelector } from 'react-redux'

const Nav = () => {
    const data=useSelector(store=>store.cartValue)
    return (
        <>
           <h1>The total number of item in cart is {data.cartcount} </h1> 
        </>
    )
}

export default Nav
