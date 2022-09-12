import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";
import * as Types from "../Type/Types";

export const getPaymentMethodList = () => (dispatch) => {
    const responseList = {
        status: false,
        isLoading: true,
        paymentMethod: []
    }
    dispatch({ type: Types.GET_PAYMENT_METHOD, payload: responseList });
    Axios.get(`payments/methods/get-payment-methods`)
        .then((res) => {
            if (res.data.status) {
                responseList.status = res.data.status;
                responseList.paymentMethod = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_PAYMENT_METHOD, payload: responseList })
            }
        }).catch((err) => {
            const responseLog = err.response;
            responseList.isLoading = false;
            if (typeof responseLog !== 'undefined') {
                const { request, ...errorObject } = responseLog;
                showToast('error', responseLog.data.message);
                dispatch({ type: Types.GET_PAYMENT_METHOD, payload: responseList })
            }
        })
}