import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    flashDealList: [],

}
function DealFlashReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_FLASH_DEAL_DATA:
            return {
                isLoading: action.payload.isLoading,
                flashDealList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default DealFlashReducer;