import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import newCartReducer from "./newCartReducer";

const RootReducer=combineReducers({
    items:itemsReducer,
    cart:newCartReducer
})

export default RootReducer