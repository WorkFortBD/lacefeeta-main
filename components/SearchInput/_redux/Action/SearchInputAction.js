import axios from "axios";
import * as Types from "../Types/Types";

export const searchProductAction = (searchData, source = {token: ""}) => async (dispatch) => {
  const {search, type} = searchData;
  const response = {
    loading: false,
    data: [],
  };

  const url = `get-items/search?search=${search}&type=${type}`;

  if(!search) return;

  try {
    response.loading = true;
    dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
    const res = await axios.get(url, {cancelToken: source.token});
    
    response.loading = false;
    response.data = res.data.data;
    dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
    
  } catch (error) {
    if(axios.isCancel(error)) {
      // console.log('from cancel token error handler')
    } else {
      response.loading = false;
      dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
      // console.log('from search catch handler => ', error)
    }
  }
};
