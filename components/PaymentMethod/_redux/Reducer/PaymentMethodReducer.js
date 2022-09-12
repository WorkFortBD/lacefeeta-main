import * as Types from "../Type/Types";

const initialState = {
  paymentMethod: [],
  isLoading: false

};
function PaymentMethodReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload.paymentMethod,
        isLoading: action.payload.isLoading,
      }

    default:
      return state;
  }
}
export default PaymentMethodReducer;
