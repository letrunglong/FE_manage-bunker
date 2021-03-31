import { TYPES } from "components/redux/constants"

const AddproductsInitialState = {}
const addProducts = (state = AddproductsInitialState, action) => {
    switch (action.type) {
        case TYPES.POST_ADD_PRODUCT:
            console.log(action.data);
            return state
        default:
            return state
    }
}

export default addProducts