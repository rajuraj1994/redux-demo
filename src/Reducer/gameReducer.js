const initialValue={
    game:'cricket',
    player:'Williamson'
}

function gameReducer(state=initialValue,action){
    switch(action.type){
        case 'CHANGE_GAME':
            return{
                ...state,
                game:action.payload
            }
        case 'CHANGE_PLAYER':
            return{
                ...state,
                player:action.payload
            }
        default:
            return state

    }
  
}
export default gameReducer