import { ROUTE, USER_INFOR_KEY } from "common/constants"
import { TYPES } from "components/redux/constants"


const loginInitialState = {
    isLogin: false,
    dataUser: USER_INFOR_KEY,
    token: "",
    firstName: '',
    lastName: '',
}
export default function loginReducer(state = loginInitialState, action) {
    switch (action.type) {
        case TYPES.AUTH_SIGNIN:
            if (action.res.status === 200) {
                if (action.res.data.status === 200) {
                    return action.res.data.data.map((value, index) => {
                        state.firstName = value.first_name
                        state.lastName = value.last_name
                        state.token = value.token
                        localStorage.setItem('token', state.token)
                        localStorage.setItem('name', state.firstName)
                        localStorage.setItem('sur', state.lastName)
                        window.location.pathname = `${ROUTE.DASHBOARD}`
                        return null
                    })
                }
                // return { ...state, isLogin: true, dataUser: action.res.data.data }
            }
            break
        default:
            return state
    }
}
