import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Cart = () => {
    const cartdata=useSelector(store=>store.cart)
    const cartArrayData=cartdata.cartitems
    const dispatch=useDispatch()
const totals=cartArrayData.map((item)=>{

    const totalData=item.itemPrice
    return totalData
})
    const totalPrice=totals.reduce((a,b)=>a+b,0)
    return (
        <>
        <Navbar/>
        {cartArrayData.length >0 ? (
            <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <table className="table table-light table-bordered">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartArrayData.map((item,i)=>(
                                <tr key={i}>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td><img src={item.itemImage} alt={item.itemName} width="60"/></td>
                                    <td><button className="btn btn-danger"
                                    onClick={()=>{dispatch({type:'DELETE_ITEM_FROM_CART',payload:item})}}
                                    >Delete</button></td>

                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>
            </div>
            {/* <div>Total Price : {totalPrice}
            </div> */}
            <button onClick={()=>{dispatch({type:'CLEAR_CART'})}}>Clear Cart</button>

        </div>
       

        ):(
            <center><h2>There are no any items in the cart</h2></center>
        )}
        
            
        </>
    )
}

export default Cart
