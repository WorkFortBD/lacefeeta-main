import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    ProductList: [],

}
function FastestDeliveryReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_FASTEST_DELIVERY_PRODUCT:
            return {
                isLoading: action.payload.isLoading,
                ProductList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default FastestDeliveryReducer;