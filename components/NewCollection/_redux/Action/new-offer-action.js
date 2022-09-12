import axios from 'axios';
import * as types from "../Type/types";

export const getNewOfferList = () => async (dispatch) => {
    const responseData = {
        data: [],
        status: true,
        isLoading: true,
    }

    try {
        dispatch({type: types.GET_NEW_OFFER_DATA, payload: responseData});

        const res = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}website/offer-section`,
            method: 'GET'
        });

        responseData.isLoading = false;
        responseData.data = res.data.data;

        dispatch({type: types.GET_NEW_OFFER_DATA, payload: responseData});

    } catch (error) {
        responseData.isLoading = false;
        dispatch({type: types.GET_NEW_OFFER_DATA, payload: responseData});
    }
}