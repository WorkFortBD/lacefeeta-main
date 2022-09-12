import * as Types from "../types/Types";

const initialState = {
  loading: false,
  products: [],
  loading_add: false,
  loading_update: false,
  lifeCycleLoading: false,
  isDeleting: false,
  add_message: "",
  delete_message: "",
  error: null,
  cartProduct: {
    productID: null,
    productName: '',
    quantity: '',
    price: '',
    offerPrice: '',
    productImage: ''
  },
  // Place Order Part

  shippingCost: 60,
  shippingCostLoading: false,
  coupon: {
    code: "",
    carts: [
      {
        productID: "",
        quantity: ""
      }
    ]
  },
  couponLoading: false,
  couponData: null,
  OrderLifeCycleDetails: null,
  orderList: [],
  orderDetails: [],
  filterOptionList: [],
  trackingTimelineList: [],
  isSubmitting: false,
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.APPLY_SHIPPING_COST:
      return {
        ...state,
        shippingCost: action.payload.shipping,
        shippingCostLoading: action.payload.shippingCostLoading
      };

    case Types.APPLY_COUPON_CODE:
      return {
        ...state,
        couponLoading: action.payload.couponLoading,
        couponData: action.payload.couponData,
        // coupon: initialState.coupon,
      };

    case Types.GET_USER_ORDER_LIST:
      return {
        ...state,
        orderList: action.payload.orderList,
        isLoading: action.payload.isLoading,
      };
    case Types.GET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload.data,
        isLoading: action.payload.isLoading,
      };
    case Types.GET_ORDER_LIFECYCLE_DETAILS:
      return {
        ...state,
        OrderLifeCycleDetails: action.payload.data,
        lifeCycleLoading: action.payload.isLoading,
      }
    case Types.GET_ORDER_FILTER_OPTION_DATA:
      return {
        ...state,
        filterOptionList: action.payload,
      };
    case Types.CANCEL_ORDER:
      return {
        ...state,
        isDeleting: action.payload.isLoading,
      };

    case Types.GET_TRACKING_TIMELINE_DATA:
      return {
        ...state,
        trackingTimelineList: action.payload.trackingTimelineList,
        isLoading: action.payload.isLoading,
      };

    case Types.CHANGE_COUPON_INPUT_DATA:
      const couponData = { ...state.coupon, code: action.payload.value }
      return { ...state, coupon: couponData }

    case Types.ORDER_SUBMIT:
        return {
          ...state,
          isSubmitting: action.payload.isLoading
        }

    default:
      return {
        ...state,
      };
  }
};

export default OrderReducer;
