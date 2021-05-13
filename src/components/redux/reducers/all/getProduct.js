import { TYPES } from "components/redux/constants"


const initialState = {
    data: []
}
const getProducts = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_ALL_PRODUCTS:
            return {...state,data:action.data}
        default:
            return state
    }
}
export default getProducts