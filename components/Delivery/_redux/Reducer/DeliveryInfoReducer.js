import { TramOutlined } from "@material-ui/icons";
import * as Types from "../Type/Types";

const initialState = {
  error: false,
  isLoading: false,

  customerInfo: {
    first_name: null,
    surname: null,
    last_name: null,
    email: null,
    username: null,
    phone_no: null,
    type: "shipping_address",
    country_id: null, //integer
    country: null,
    city_id: null,  //integer
    city: null,
    area_id: null,   //integer
    area: null,
    address: null,
    is_default: 1
  },
};
function DeliveryInfoReducer(state = initialState, action) {
  switch (action.type) {

    case Types.DELIVER_CUSTOMER_INPUT_CHANGE:
      const customerInfo = { ...state.customerInfo };
      customerInfo[action.payload.name] = action.payload.value
      return {
        ...state,
        customerInfo
      };

    case Types.SET_CUSTOMER_DELIVERY_INFO:
      return {
        ...state,
        customerInfo: action.payload
      };

    default:
      return state;
  }
}
export default DeliveryInfoReducer;
