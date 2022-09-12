import * as Types from "../Types/Types";
const initialState = {
    isLoading   : false,
    isSubmitting: false,
    footerInfo  : [],
};

const FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_FOOTER_INFORMATION_DATA:
            return {
                ...state,
                footerInfo: action.payload,
            }

        case Types.POST_SUBSCRIBE_NEWSLETTER:
            return {
                ...state,
                isLoading: action.payload.loading
            }
       
        default:
            return state;
    }
};

export default FooterReducer;
