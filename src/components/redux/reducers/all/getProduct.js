import axios from "axios"
import { TYPES } from "components/redux/constants"


const initialState = {
    data: []
}
const getProducts = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_ALL_PRODUCTS:
            axios({
                method: "GET",
                url: '/getProducts'
            }).then(res => {
                state.data = res.data
            }
            )
            break
        case TYPES.GET_PRODUCTS_BY_CATE:
            return axios({
                url: 'get-product-by-cate/' + action.val,
                method: "GET"
            }).then(res => {
                state = res.data
            })
        default:
            return state
    }
}
export default getProducts