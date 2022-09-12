import * as Types from "./types";

const initialState = {
  cities: [],
  cities: [],
  areas: []
};

/**
 * Master Data Reducer
 * 
 * Manage master data here
 * 
 * @since 0.0.1
 * 
 * @param object state 
 * @param object action 
 * 
 * @return object
 */
const MasterDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload.data,
      };
    
    case Types.GET_CITIES:
      return {
        ...state,
        cities: action.payload.data,
      };
    
    case Types.GET_AREAS:
      return {
        ...state,
        areas: action.payload.data,
      };

    default:
      return {
        ...state,
      };
  }
};

export default MasterDataReducer;
