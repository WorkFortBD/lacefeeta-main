import Axios from 'axios';
import * as Types from "../Type/Types";

export const getCompanyPolicyList = () => (dispatch) => {
    const data = [
        {
            title: "30 days return",
            description: "No Question Ask",
            icon: "/images/policies/30-day-return.png"
        },
        {
            title: "secure payment",
            description: "100% Secure Payment",
            icon: "/images/policies/secure-payment.png"
        },
        {
            title: "24/7 support",
            description: "Dedicated Support",
            icon: "/images/policies/24-7-support.png"
        },
     
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_COMPANY_POLICY_LIST, payload: responseData});
}