import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
import alertReducer from "./alertMessages"
import signupReducer from "./signupReducer"
import getProducts from "./getProduct"
export default combineReducers({
    loginReducer,
     alertReducer, 
     signupReducer, 
     getProducts,
})