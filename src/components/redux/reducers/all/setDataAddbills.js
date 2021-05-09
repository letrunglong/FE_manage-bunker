import { TYPES } from "components/redux/constants"

const BillDataInitialState = {}
const setBillData = (state = BillDataInitialState, action) => {
    switch (action.type) {
        case TYPES.SET_DATA_BILLS_IMPORT:
            let arrBill = []
            arrBill.push(action.billData)
            console.log(arrBill);
            return state
        default:
            return state
    }
}
export default setBillData