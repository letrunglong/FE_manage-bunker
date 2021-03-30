import { TYPES } from "../constants"


const getProducts = (state = [], action) => {
    switch (action.type) {
        case TYPES.GET_ALL_PRODUCTS:
            console.log(action.allProducts)
            return {state:action.allProducts}
        default:
            return state
    }
}
export default getProducts