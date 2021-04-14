import { combineReducers } from "redux";
import loginReducer from "./all/loginReducer"
import alertReducer from "./all/alertMessages"
import signupReducer from "./all/signupReducer"
import getProducts from "./all/getProduct"
import addProducts from"./all/addProduct"
import addOnProductsReducers from './all/add-onp-roducts-products'
import addSuplier from './all/addSuplier'
export default combineReducers({
    loginReducer,
     alertReducer, 
     signupReducer, 
     getProducts,
     addProducts,
     addOnProductsReducers,
     addSuplier,
})