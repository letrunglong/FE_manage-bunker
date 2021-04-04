import axios from "axios"
import { TYPES } from "components/redux/constants"



const getProducts = (state = {data:[]}, action) => {
    switch (action.type) {
        case TYPES.GET_ALL_PRODUCTS:
            if (localStorage.getItem('token')) {
                axios({
                    method: "GET",
                    url: '/getProducts'
                }).then(res => {
                    state.data = res.data
                }
                )
            }
            break
        default:
            return state
    }
}
export default getProducts