import Axios from "axios";
import * as Types from "../Type/Types";

export const getShopList = (page) => async (dispatch) => {
  const url = `brands?isPaginated=1&paginateNo=30&page=${page}`;

  try {
    // initialize req
    dispatch({ type: Types.INIT_SHOP_LIST });
    const res = await Axios.get(url);
    // successful res
    dispatch({ type: Types.GET_SHOP_LIST, payload: res.data.data });
  } catch (error) {
    // catch error
    dispatch({ type: Types.FETCH_SHOP_LIST_FAILED, payload: { error: true } });
  }
};