import axios from "axios"
import { TYPES } from "components/redux/constants"
import store from "components/redux/store"
const addOnProductsReducers = (state = {}, action) => {
    switch (action.type) {
        case TYPES.POST_ADD_CATE_PRODUCT:
            return axios({
                method: "POST",
                url: '/add-categories',
                data: JSON.stringify(action.obj),
                headers: {
                    "Content-type": "Application/json"
                }
            }).then(res => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: res.data.messages
                })
            }).catch(err => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: 'Không có phản hồi!'
                })
            })
        case TYPES.POST_ADD_BUNKER_PRODUCT:
            return axios({
                method: "POST",
                url: '/add-bunker',
                data: JSON.stringify(action.obj),
                headers: {
                    "Content-type": "Application/json"
                }
            }).then(res => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: res.data.messages
                })
            }).catch(err => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: 'Không có phản hồi!'
                })
            })
        case TYPES.POST_ADD_UNIT_PRODUCT:
            return axios({
                method: "POST",
                url: '/add-unit',
                data: JSON.stringify(action.obj),
                headers: {
                    "Content-type": "Application/json"
                }
            }).then(res => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: res.data.messages
                })
            }).catch(err => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: 'Không có phản hồi!'
                })
            })
        case TYPES.POST_ADD_PRODUCER_PRODUCT:
            return axios({
                method: "POST",
                url: '/add-producer',
                data: JSON.stringify(action.obj),
                headers: {
                    "Content-type": "Application/json"
                }
            }).then(res => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: res.data.messages
                })
            }).catch(err => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: 'Không có phản hồi!'
                })
            })
        default:
            return state
    }
}
export default addOnProductsReducers