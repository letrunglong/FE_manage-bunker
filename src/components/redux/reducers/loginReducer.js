import { ROUTE, USER_INFOR_KEY } from "common/constants"
import { TYPES } from "../constants"


const loginInitialState = {
    isLogin: false,
    dataUser: USER_INFOR_KEY,
    token: ""
}
export default function loginReducer(state = loginInitialState, action) {
    switch (action.type) {
        case TYPES.AUTH_SIGNIN:
            if (action.res.status === 200) {
                if (action.res.data.status === 200) {
                    let tokenUser = action.res.data.data.map((value, index) => {
                        return value.token
                    })
                    localStorage.setItem('token', tokenUser)
                    window.location.pathname = `${ROUTE.DASHBOARD}`
                }
                return { ...state, isLogin: true, dataUser: action.res.data.data }
            }
            break
        default:
            return state
    }
}
