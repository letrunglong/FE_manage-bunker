import { ROUTE, USER_INFOR_KEY } from "common/constants"
import { TYPES } from "components/redux/constants"


const loginInitialState = {
    isLogin: false,
    dataUser: USER_INFOR_KEY,
    firstName: '',
    lastName: '',
    email: '',
    token: ''
}
export default function loginReducer(state = loginInitialState, action) {
    switch (action.type) {
        case TYPES.AUTH_SIGNIN:
            localStorage.setItem('token', action.dataUser.token)
            localStorage.setItem('name', action.dataUser.first_name)
            localStorage.setItem('sur', action.dataUser.last_name)
            localStorage.setItem('email', action.dataUser.email)
            localStorage.setItem('id', action.dataUser.user_id)
            localStorage.setItem('status', action.dataUser.status)
            if (parseInt(localStorage.getItem('status')) === 1)
                return window.location.pathname = `${ROUTE.DASHBOARD}`
            return window.location.pathname = `${ROUTE.CART}`
        default:
            return state
    }
}
