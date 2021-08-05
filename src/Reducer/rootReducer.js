import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import gameReducer from "./gameReducer";

const rootReducer=combineReducers({
    cartValue:cartReducer,
    gameValue:gameReducer
})

export default rootReducer