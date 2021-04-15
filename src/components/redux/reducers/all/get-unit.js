import { TYPES } from "components/redux/constants"


const unitReducer = (state = [], action) => {
    switch (action.type) {
        case TYPES.GET_UNIT:
            return state = action.data
        default:
            return state
    }
}
export default unitReducer