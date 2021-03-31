import { combineReducers } from "redux";
import loginReducer from "./all/loginReducer"
import alertReducer from "./all/alertMessages"
import signupReducer from "./all/signupReducer"
import getProducts from "./all/getProduct"
import addProducts from"./all/addProduct"
export default combineReducers({
    loginReducer,
     alertReducer, 
     signupReducer, 
     getProducts,
     addProducts,
})