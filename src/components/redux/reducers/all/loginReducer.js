import { ROUTE, USER_INFOR_KEY } from "common/constants"
import { TYPES } from "components/redux/constants"


const loginInitialState = {
    isLogin: false,
    dataUser: USER_INFOR_KEY,
    firstName: '',
    lastName: '',
    email: '',
    token:''
}
export default function loginReducer(state = loginInitialState, action) {
    switch (action.type) {
        case TYPES.AUTH_SIGNIN:
            console.log(action.dataUser);
            localStorage.setItem('token',action.dataUser.token)
            localStorage.setItem('name',action.dataUser.first_name)
            localStorage.setItem('sur',action.dataUser.last_name)
            localStorage.setItem('email',action.dataUser.email)
            localStorage.setItem('status',action.dataUser.status)
            window.location.pathname=`${ROUTE.IMPORT_PRODUCTS}`
        break
        default:
            return state
    }
}
