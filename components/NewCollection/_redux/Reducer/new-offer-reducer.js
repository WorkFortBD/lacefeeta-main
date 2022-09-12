import * as types from "../Type/types";

const initialState = {
    isLoading: false,
    newOffer: [],
}

function NewOfferReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_NEW_OFFER_DATA:
            return {
                isLoading: action.payload.isLoading,
                newOffer: action.payload.data,
            }

        default:
            return state;
    }
}

export default NewOfferReducer;