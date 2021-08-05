import React from 'react'
import { useDispatch } from 'react-redux'

const Item = (props) => {
    const showdata=props.data
    const dispatch=useDispatch()
    return (
        <>
            
                <div className="col">
                    <div className="card shadow-lg">
                        <img src={showdata.itemImage} className="card-img-top" alt={showdata.itemName} style={{height:'250px'}} />
                        <div className="card-body">
                            <center><h5 className="card-title">{showdata.itemName}</h5></center>
                            <center><h5>Rs. {showdata.itemPrice}</h5></center>
                            <center><button className="btn btn-info"
                            onClick={()=>{dispatch({type:'ADD_ITEM_TO_CART',payload:showdata})}}
                            
                            >Add To Cart</button></center>

                        </div>
                    </div>
                </div>

            

        </>
    )
}

export default Item
