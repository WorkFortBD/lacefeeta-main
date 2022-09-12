import { productHasOffer } from "../../../../services/ProductService";
import { getSupplierWiseCartsData } from "../action/CartAction";
import * as Types from "../types/Types";

const initialState = {
  carts: [],
  supplierWiseCarts: [],
  totalQuantity: 0,
  totalPrice: 0,

  checkedAllCarts: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CARTS:
      return {
        ...state,
        supplierWiseCarts: getSupplierWiseCartsData(action.payload),
        carts: action.payload,
        totalQuantity: calculateTotalQtyAndPrices(action.payload).totalQuantity,
        totalPrice: calculateTotalQtyAndPrices(action.payload).totalPrice,
        checkedAllCarts: checkedAllCartsSelectedOrNot(action.payload),
      };

    default:
      return {
        ...state,
      };
  }
};

/**
 * Calculate Total Qty And Prices.
 *
 * @since 1.0.0
 *
 * @param array carts
 *
 * @return object cart calculation response
 */
const calculateTotalQtyAndPrices = (carts) => {
  let response = {
    totalQuantity: 0,
    totalPrice: 0,
  };

  carts.forEach((cartItem) => {
    const qty         = parseInt(cartItem.quantity);
    const price       = parseFloat(cartItem.price);
    const offerPrice  = parseFloat(cartItem.offerPrice);
    const hasOffer    = productHasOffer(price, offerPrice, cartItem.isOffer);

    if (cartItem.isChecked) {
      response.totalQuantity += !qty ? 1 : qty; // By default 1 if quantity is not available, else quantity
      response.totalPrice += (!hasOffer ? price : offerPrice) * (!qty ? 1 : qty); // If has offer price then use offer price * quantity else use price * quantity
    }
  });

  return response;
};

const checkedAllCartsSelectedOrNot = (carts) => {
  return carts.every((cart) => cart.isChecked === true);
};

export default CartReducer;
