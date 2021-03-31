import axios from "axios";
import { TYPES } from "components/redux/constants"
import store from "components/redux/store";

const signupInitialState = {

}
const signupReducer = (state = signupInitialState, action) => {
    switch (action.type) {
        case TYPES.AUTH_SIGNUP:
            axios({
                url:'/register',
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                },
                data:JSON.stringify(action.obj)
            }).then(res=>{
                store.dispatch({type:TYPES.ALERT_NOTIFIER_ON,messages:res.data.messages})
            })
            return state
        default:
            return state
    }
}
export default signupReducer