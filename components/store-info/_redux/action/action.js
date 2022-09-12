import axios from 'axios';
import * as types from '../types/types';

export const getStoreInfo = (id) => async dispatch => {
    const response = {
        isLoading: true,
        storeInfo: null
    }
    
    const url = 'business/' + id;

    try {
        dispatch({type: types.GET_STORE_INFO, payload: response});

        const res = await axios.get(url);
        response.isLoading = false;
        response.storeInfo = res.data.data;
        dispatch({type: types.GET_STORE_INFO, payload: response});
    } catch (err) {
        // console.log('err store => ', err)
    }
}