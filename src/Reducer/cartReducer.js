const initialValue={
    cartcount:0
}
function cartReducer(state=initialValue,action){
    //here state store the initial value
    //action is a function which controls the state value
    switch(action.type){
        //action.type means function name
        case 'ADD_ITEM':
            return{
                cartcount:++state.cartcount
            }
        case 'REMOVE_ITEM':
            return{
                cartcount:--state.cartcount
            }
        default:{
            return state

        }

    }

   
}

export default cartReducer