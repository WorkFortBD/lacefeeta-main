import * as Types from "../types/types";

const initialState = {
    isLoading: false,
    itemList: [],
    reviewList: [],
    reviewInput: {
        item_id: '',
        rating_value: "",
        comment: "",
        images: ""
    },
    reviewSubmitting: false,
};

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ITEM_LIST_BY_USER:
            return {
                ...state,
                itemList: action.payload.itemList,
                isLoading: action.payload.isLoading,
            };
        case Types.GET_REVIEW_LIST_BY_USER:
            return {
                ...state,
                reviewList: action.payload.reviewList,
                isLoading: action.payload.isLoading,
            };
        case Types.CHANGE_REVIEW_INPUT:
            const reviewInput = { ...state.reviewInput };
            reviewInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                reviewInput,
            };
        case Types.STORE_REVIEW_DATA:
            return {
                ...state,
                reviewSubmitting: action.payload.isLoading,
            };

        default:
            return state;
    }
};


export default ReviewReducer;
