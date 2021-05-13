import { TYPES } from "components/redux/constants"
const initialState = {
    data:[]
}
const setBillData = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_DATA_BILLS_IMPORT:
            return {...state,data:action.billData}
        default:
            return state
    }
}
export default setBillData