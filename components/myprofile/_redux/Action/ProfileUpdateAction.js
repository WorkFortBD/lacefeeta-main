import Axios from 'axios';
import { showToast } from '../../../master/Helper/ToastHelper';
import * as Types from "../Type/Types";

//get shipping address
export const getShippingAddressForInput = (addressType, userId) => (dispatch) => {
    const responseData = {
        data: null,
        status: false,
        isLoading: true
    }
    dispatch({ type: Types.GET_SHIPPING_ADDRESS_FOR_INPUT, payload: responseData });

    Axios.get(`address?user_id=${userId}&type=${addressType}`)
        .then((res) => {
            const loadData = res.data.data[0];
            if (loadData.country !== null && loadData.country_id !== null) {
                loadData.selectedCountry = {
                    label: loadData.country,
                    value: loadData.country_id,
                }
            }
            if (loadData.division !== null && loadData.division_id !== null) {
                loadData.selectedDivision = {
                    label: loadData.division,
                    value: loadData.division_id,
                }
            }
            if (loadData.city !== null && loadData.city_id !== null) {
                loadData.selectedCity = {
                    label: loadData.city,
                    value: loadData.city_id,
                }
            }
            if (loadData.area !== null && loadData.area_id !== null) {
                loadData.selectedArea = {
                    label: loadData.area,
                    value: loadData.area_id,
                }
            }
            responseData.data = loadData;
            responseData.isLoading = false;
            responseData.status = true;
            dispatch({ type: Types.GET_SHIPPING_ADDRESS_FOR_INPUT, payload: responseData });
        })
}
//get billing address
export const getBillingAddressForInput = (addressType, userId) => (dispatch) => {
    const responseData = {
        data: null,
        status: false,
        isLoading: true
    }
    dispatch({ type: Types.GET_BILLING_ADDRESS_FOR_INPUT, payload: responseData });

    Axios.get(`address?user_id=${userId}&type=${addressType}`)
        .then((res) => {
            const loadData = res.data.data[0];
            if (loadData.country !== null && loadData.country_id !== null) {
                loadData.selectedCountry = {
                    label: loadData.country,
                    value: loadData.country_id,
                }
            }
            if (loadData.division !== null && loadData.division_id !== null) {
                loadData.selectedDivision = {
                    label: loadData.division,
                    value: loadData.division_id,
                }
            }
            if (loadData.city !== null && loadData.city_id !== null) {
                loadData.selectedCity = {
                    label: loadData.city,
                    value: loadData.city_id,
                }
            }
            if (loadData.area !== null && loadData.area_id !== null) {
                loadData.selectedArea = {
                    label: loadData.area,
                    value: loadData.area_id,
                }
            }
            responseData.data = loadData;
            responseData.isLoading = false;
            responseData.status = true;
            dispatch({ type: Types.GET_BILLING_ADDRESS_FOR_INPUT, payload: responseData });
        })
}
// get user data for set input field 
export const handleSetDataIntoInputField = (userData) => (dispatch) => {
    dispatch({ type: Types.GET_USER_UPDATED_DATA, payload: userData })
}

//handle change input field 
export const handleChangeBillingAddressInput = (name, value) => (dispatch) => {
    const addressData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.CHANGE_BILLING_ADDRESS_INPUT, payload: addressData })
}
//handle change input field 
export const handleChangeShippingAddressInput = (name, value) => (dispatch) => {
    const addressData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.CHANGE_SHIPPING_ADDRESS_INPUT, payload: addressData })
}


//handle update shipping address
export const handleUpdateShippingAddress = (shippingAddressInput, userId) => (dispatch) => {
    const responseData = {
        status: false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_SHIPPING_ADDRESS, payload: responseData });
    const submittedData = shippingAddressInput;
    submittedData.user_id = userId;
    Axios.put(`address`, shippingAddressInput)
        .then((res) => {
            responseData.status = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_SHIPPING_ADDRESS, payload: responseData });
        })

}

//handle store billing address
export const handleUpdateBillingAddress = (billingAddressInput, userId) => (dispatch) => {
    const responseData = {
        status: false,
        isLoading: true,
    }
    dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
    const submittedData = billingAddressInput;
    submittedData.user_id = userId;
    Axios.put(`address`, submittedData)
        .then((res) => {
            responseData.status = true;
            responseData.isLoading = false;
            showToast('success', res.data.message);
            dispatch({ type: Types.STORE_BILLING_ADDRESS, payload: responseData });
        })

}
