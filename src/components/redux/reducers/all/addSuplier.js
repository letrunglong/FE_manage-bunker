import axios from "axios";
import { TYPES } from "components/redux/constants"
import store from "components/redux/store";
const addSuplier = (state = '', action) => {
    switch (action.type) {
        case TYPES.POST_ADD_SUPLIER:
            let obj = {}
            obj.suplier = action.suplier
            axios({
                method: "POST",
                url: '/add-suplier',
                headers: {
                    "Content-type": "Application/json"
                },
                data: JSON.stringify(obj)
            }).then(res => {
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON, messages: res.data.messages
                })
            }).catch(() =>
                store.dispatch({
                    type: TYPES.ALERT_NOTIFIER_ON, messages: "Không có phản hồi"
                })
            )
            return state
        default:
            return state
    }
}
export default addSuplier