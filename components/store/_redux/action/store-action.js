import axios from "axios";
import * as types from "../types/types";

export const getStoreList = () => async (dispatch) => {
  const url = 'business';

  try {
    // initialize req
    dispatch({ type: types.INIT_STORE_LIST });
    const res = await axios.get(url);
    const data = res.data.data

    // successful res
    dispatch({ type: types.GET_STORE_LIST, payload: { storeList: data } });
    
  } catch (error) {
    // catch error
    dispatch({ type: types.FETCH_STORE_LIST_FAILED, payload: { error: true } });
  }
};

export const getFilteredStoreList = (locations, page) => async (dispatch) => {
  let url = `business?isPaginated=1&paginateNo=20&page=${page}&`

  for (const location in locations) {
    url = url + location + '=' + locations[location] + '&';
  }
  try {
    dispatch({type: types.INIT_STORE_LIST});
    const res = await axios.get(url);
    const data = res.data.data
    dispatch({ type: types.GET_STORE_LIST, payload: data });

  } catch (err) {
    // console.log('err => ', err)
  }
}

export const locationChanged = (locations) => ({
  type: types.STORE_LOCATION_CHANGED,
  payload: locations
})

export const clearLocation = () => ({
  type: types.STORE_LOCATION_CLEARED
})