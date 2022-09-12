import * as Types from "../Type/Types";

const initialState = {
  products            : [],
  isProductListloading: false,
  
  productSlug         : null,
  product             : null,
  isModalOpen         : false,
  isDetailLoading     : false
};

/**
 * Product Reducer
 * Manage all product related data manipulations
 * 
 * @since 1.0.0
 * 
 * @param object state 
 * @param string action 
 * 
 * @return object state
 */
const ProductReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case Types.GET_PRODUCT_LIST_MAIN:
      return {
        ...state,
        products            : action.payload.data,
        isProductListloading: action.payload.loading
      };

    case Types.GET_SINGLE_PRODUCT_DETAILS:
      return {
        ...state,
        product        : action.payload.data, // Will Set for both, Object or null
        isDetailLoading: action.payload.loading
      };

    case Types.TOGGLE_PRODUCT_MODAL:
      return {
        ...state,
        isModalOpen: state.isModalOpen ? false: true,
        productSlug: action.payload
      };

    default:
      return state;
  }
};
export default ProductReducer;
