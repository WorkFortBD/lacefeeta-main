import * as Types from "../Types/Types";
import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";

/**
 * subscribe to newsletter
 * 
 * since 1.0.0
 * 
 * @param email
 * 
 */

export const subscribeNewsletter = email => async dispatch => {
    let response = {
        loading: true
    }

    const url = "subscriber/subscribe";
    const data = {
        email: email
    }
    
    try {
        dispatch({type: Types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
        response.loading = false;
        const res = await Axios.post(url, data);
        dispatch({type: Types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
        showToast('success', res.data.message);
    } catch (err) {
        const message = JSON.parse(err.request.response).message;
        response.loading = false;
        dispatch({type: Types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
        showToast('error', message);
    }
}