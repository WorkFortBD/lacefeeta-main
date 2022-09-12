import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    policyList: [],

}
function CompanyPolicyReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_COMPANY_POLICY_LIST:
            return {
                isLoading: action.payload.isLoading,
                policyList: action.payload.data,
            }
        default:
            break;
    }
    return state;
}
export default CompanyPolicyReducer;