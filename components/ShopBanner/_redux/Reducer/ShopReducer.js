import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    ShopList: [],

}
function ShopReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_SHOP_LIST:
            return {
                isLoading: action.payload.isLoading,
                ShopList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default ShopReducer;