import * as Types from "../Types/Types";
const initialState = {
    paymentMethods: [],
};

const ShippingInfoReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.CHECKOUT_PAYMENT_METHODS:
            return {
                ...state,
                paymentMethods: action.payload,
            }
        default:
            break;
    }
    return newState;
};

export default ShippingInfoReducer;
