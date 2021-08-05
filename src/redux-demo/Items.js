import React, { useState } from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'
const Items = () => {
    const itemsdata = useSelector(store => store.items)
    const [itemList,setItemList] =useState(itemsdata.items) 
    const[search,setSearch]=useState('')

    const filterItems=()=>{
        const allData=itemsdata.items
        const filterData=allData.filter(item=>item.itemName.toLowerCase().includes(search.toLowerCase()))
        setItemList(filterData)
    }

    return (
        <>
            <form className="d-flex col-md-8 mt-3 mx-auto bg-secondary p-3">
                <input className="form-control me-2" type="search" placeholder="Search Item from Here" aria-label="Search"
                onChange={(e)=>{setSearch(e.target.value)}}
                onKeyUp={filterItems}
                 />
            </form>
            <div className="container mt-3 mb-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {itemList.map((item, i) => (
                        <Item key={i} data={item} />

                    ))}

                </div>

            </div>
        </>
    )
}

export default Items
