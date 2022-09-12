import Axios from "axios";
import * as Types from "../Type/Types";
import { decrypt } from "../../../master/utils/EncryptHelper";

export const handleChangeDeliveryInputData = (name, value) => (dispatch) => {
    const addressData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.DELIVER_CUSTOMER_INPUT_CHANGE, payload: addressData })
}

/**
 * Get Last transaction data by transaction id
 *
 * @since 0.0.1
 *
 * @return Object|null transaction data
 */
export async function getLastTransactionData() {

    // Check if there is any tr value is in local storage,
    let transaction_no = await localStorage.getItem('tr');
    let transactionData = null;

    // if not, then return null;
    if (typeof transaction_no !== 'undefined' && transaction_no !== null) {
        transaction_no = decrypt(transaction_no);
        await Axios.get(`sales/${transaction_no}`)
            .then(res => {
                transactionData = res.data.data;
            })
            .catch(err => {
                return null;
            })
    }

    return transactionData;
}

export const getCurrentUserDataAction = (userData) => (dispatch) => {
    dispatch({ type: Types.SET_CUSTOMER_DELIVERY_INFO, payload: userData });
}