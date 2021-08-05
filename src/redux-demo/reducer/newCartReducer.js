const initialData={
    cartitems:[]
}

function newCartReducer(state=initialData,action){
    switch(action.type){
        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                cartitems:[...state.cartitems,action.payload]
            }
        case 'DELETE_ITEM_FROM_CART':
            return{
                ...state,
                cartitems:state.cartitems.filter(item=>item.itemName !==action.payload.itemName)
            }
        case 'CLEAR_CART':
            return{
                cartitems:[]
            }
        default:
            return state
    }
}

export default newCartReducer