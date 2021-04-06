import axios from "axios";
import { ROUTE } from "common/constants";
import { TYPES } from "components/redux/constants"
import store from "components/redux/store";

const AddproductsInitialState = {}
const addProducts = (state = AddproductsInitialState, action) => {
    switch (action.type) {
        case TYPES.POST_ADD_PRODUCT:     
            axios({
                method: "POST",
                url: "/add-products",
                headers: { "Content-Type": "multipart/form-data" },
                data: action.fd
            }).then(res => {
                store.dispatch({ type: TYPES.ALERT_NOTIFIER_ON, messages: res.data.messages })
                if (res.data.status === 200) {
                    setTimeout(function () { window.location.pathname = ROUTE.PRODUCT }, 300);
                }
            }).catch(err => { store.dispatch({ type: TYPES.ALERT_NOTIFIER_ON, messages: "Không có phản hồi từ máy chủ" }) })
            return state
        default:
            return state
    }
}

export default addProducts