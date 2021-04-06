import axios from "axios"
import { ROUTE } from "common/constants"
import { TYPES } from "components/redux/constants"
import store from "components/redux/store"
const addOnProductsReducers = (state = {}, action) => {
    switch (action.type) {
        case TYPES.POST_ADD_CATE_PRODUCT:
            axios({
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
            break;
        case TYPES.POST_ADD_BUNKER_PRODUCT:
            axios({
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
            break
        case TYPES.POST_ADD_UNIT_PRODUCT:
            axios({
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
            break
        case TYPES.POST_ADD_PRODUCER_PRODUCT:
            axios({
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
            break
        case TYPES.DELETE_PRODUCTS:
            let id= action.prod.id
            let image= action.prod.image
            return axios({
                url: '/delete-product/' + id +'/'+ image,
                method: "DELETE"
            }).then(res => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: res.data.messages
                })
                if(res.data.status === 200){
                    return setTimeout(function () { window.location.pathname = ROUTE.PRODUCT }, 300);
                }
            }).catch(()=>{
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON,
                    messages: "Không có phản hồi!"
                })
            })
        default:
            return state
    }
}
export default addOnProductsReducers