import { TramOutlined } from "@material-ui/icons";
import * as types from "../types/types";

const initialState = {
  storeList: [],
  error: false,
  isLoading: false,
  selectedLocation: {},
  paginate: {
    currentPage: 1,
    pageCount: [],
    perPage: null,
    totalCount: null,
  }
};

function storeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.INIT_STORE_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_STORE_LIST:
      const totalPage_ = Math.ceil(parseInt(payload.total) / parseInt(payload.per_page));

      return {
        ...state,
        storeList: payload.data,
        paginate: {
          ...state.paginate,
          currentPage: payload.current_page,
          pageCount: [...Array(totalPage_).keys()],
          perPage: parseInt(payload.per_page),
          totalCount: parseInt(payload.total)
        },
        isLoading: false,
        error: false,
      };

    case types.FETCH_STORE_LIST_FAILED:
      return {
        ...state,
        error: true,
      };

    case types.STORE_LOCATION_CHANGED:
      return {
        ...state,
        selectedLocation: {
          ...state.selectedLocation,
          ...payload
        },
        paginate: {
          ...state.paginate,
          currentPage: 1
        }
      };

    case types.STORE_LOCATION_CLEARED:
      return {
        ...state,
        selectedLocation: {}
      };

    default:
      return state;
  }
}
export default storeReducer;
