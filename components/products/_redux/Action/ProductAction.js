import Axios from "axios";
import * as Types from "../Type/Types";

/**
 * Get All Product List action
 *
 * @since 1.0.0
 *
 * @param array|object args different filtering argument processed
 *
 * @return void Dispatch `GET_PRODUCT_LIST_MAIN`
 */
export const getProductListAction =
  (args = {}) =>
  async (dispatch) => {
    let response = {
      loading: false,
      data: [],
    };

    // console.log(`args`, args);

    // console.log(`url`, url);

    response.loading = true;
    dispatch({ type: Types.GET_PRODUCT_LIST_MAIN, payload: response });

    response.data = await getProductsData(args);
    response.loading = false;

    dispatch({ type: Types.GET_PRODUCT_LIST_MAIN, payload: response });
  };

/**
 * Get Products Data
 *
 * @since 1.0.0
 *
 * @param object args filtered criteria
 *
 * @return array products array
 */
export const getProductsData = async (args) => {
  try {
    let url = `get-items?p=1`;

    if (args["type"]) {
      url += `&type=${args["type"]}`;
    }

    if (args["category"]) {
      url += `&category=${args["category"]}`;
    }

    if (typeof args["limit"] !== "undefined") {
      url += `&paginate_no=${args["limit"]}`;
    }

    const res = await Axios.get(url);

    return res.data.data.data;
  } catch (error) {
    //
  }
};

/**
 * Get Single product detail slug
 *
 * @since 1.0.0
 *
 * @param string Product slug
 *
 * @return void Dispatch `GET_SINGLE_PRODUCT_DETAILS`
 */
export const getSingleProductDetailsAction = (slug) => async (dispatch) => {
  if (
    typeof slug !== "undefined" &&
    typeof slug !== null &&
    typeof slug !== ""
  ) {
    const response = {
      loading: false,
      data: null,
    };

    if (typeof slug === "undefined" || slug === "" || slug === null) {
      dispatch({ type: Types.GET_SINGLE_PRODUCT_DETAILS, payload: response });
    } else {
      response.loading = true;
      dispatch({ type: Types.GET_SINGLE_PRODUCT_DETAILS, payload: response });

      // Encodes a text string as a valid Uniform Resource Identifier
      const uri = encodeURI(`get-item-detail/${slug}`);

      const res = await Axios.get(uri);
      response.loading = false;
      response.data = res.data.data;

      dispatch({ type: Types.GET_SINGLE_PRODUCT_DETAILS, payload: response });
    }
  }
};

/**
 * Toggle Product Modal Action
 *
 * @since 1.0.0
 *
 * @returns void Dispatch product modal toggle event `TOGGLE_PRODUCT_MODAL`
 */
export const toggleProductModalAction = (slug) => async (dispatch) => {
  dispatch({ type: Types.TOGGLE_PRODUCT_MODAL, payload: slug });
};
