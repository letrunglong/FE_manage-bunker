import { TYPES } from "components/redux/constants"

const alertReducerInitialState = {
    messages: "",
    alertStatus:false
}
const alertReducer = (state = alertReducerInitialState, action) => {
    switch (action.type) {
        case TYPES.ALERT_NOTIFIER_ON:
            return { ...state, messages: action.messages, alertStatus:!state.alertStatus}
        case TYPES.ALERT_NOTIFIER_OFF:
            return { ...state,alertStatus:!state.alertStatus}
        default:
            return state
    }
}
export default alertReducer