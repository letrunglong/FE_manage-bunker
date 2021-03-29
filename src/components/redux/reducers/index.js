import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
import alertReducer from "./alertMessages"
export default combineReducers({
    loginReducer, alertReducer
})