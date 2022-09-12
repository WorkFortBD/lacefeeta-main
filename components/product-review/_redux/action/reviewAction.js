import * as Types from "../types/types";
import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";


export const getItemListByUser = () => (dispatch) => {
    const responseList = {
        status: false,
        isLoading: true,
        itemList: []
    }
    dispatch({ type: Types.GET_ITEM_LIST_BY_USER, payload: responseList });
    Axios.get(`sales/sale-items/by-user`)
        .then((res) => {
            if (res.data.status) {
                responseList.status = res.data.status;
                responseList.itemList = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_ITEM_LIST_BY_USER, payload: responseList })
            }
        })
        .catch(err => {
            // console.log('err from getItemListByUser', err)
        })
}

//Get Review List By User
export const getReviewListByUser = (isItem, isUser, status) => (dispatch) => {
    const responseList = {
        status: false,
        isLoading: true,
        reviewList: []
    }
    const url = `item-review/get-by-item?item_id=${isItem}&user_id=${isUser}&status=${status}`;

    dispatch({ type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList });

    Axios.get(url)
        .then((res) => {
            if (res.data.status) {
                responseList.status = res.data.status;
                responseList.reviewList = res.data.data;
                responseList.isLoading = false;
                dispatch({ type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList })
            }
        })
        .catch(err => {
            responseList.isLoading = false;
            dispatch({type: Types.GET_REVIEW_LIST_BY_USER, payload: responseList})
            // console.log('err from get Review List by user', err)
        })
}

//handle change review item
export const handleChangeReviewItemInput = (name, value) => (dispatch) => {
    const reviewInput = {
        name: name,
        value: value
    }
    dispatch({ type: Types.CHANGE_REVIEW_INPUT, payload: reviewInput })
}

// store review
export const storeReviewData = (reviewStoreInput, handleClose, userId) => (dispatch => {
    let responseData = {
        status: false,
        message: "",
        isLoading: true,
        returnData: ""
    };
    dispatch({ type: Types.STORE_REVIEW_DATA, payload: responseData });

    Axios.post(`item-review/create`, reviewStoreInput)
    .then((res) => {
            if (res.data.status) {
                let data = res.data;
                responseData.message = data.message;
                responseData.status = data.status;
                responseData.isLoading = false;
                showToast('success', responseData.message);
                dispatch({ type: Types.STORE_REVIEW_DATA, payload: responseData });
                dispatch(getItemListByUser());
                dispatch(getReviewListByUser(reviewStoreInput.item_id, userId));
                handleClose();
            }
        })
        .catch((err) => {
            // const { response } = err;e
            const { request, ...errorObject } = err;
            responseData.isLoading = false;
            if(typeof errorObject.response !== 'undefined' && typeof errorObject.response.data !== 'undefined' && typeof errorObject.response.data.message !== 'undefined' && errorObject.response.data.message.length > 0){
                responseData.message = errorObject.response.data.message;
            } else {
                responseData.message = 'Sorry! Something went wrong...';
            }
            showToast("error", responseData.message);
            dispatch({ type: Types.STORE_REVIEW_DATA, payload: responseData });
            handleClose();
        });
})