import * as types from '../types/types';

const initialState = {
    isLoading: false,
    storeInfo: null
}

const StoreInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_STORE_INFO:
            return { 
                ...state, 
                ...payload 
            }

        default:
            return state
    }
};

export default StoreInfoReducer;
