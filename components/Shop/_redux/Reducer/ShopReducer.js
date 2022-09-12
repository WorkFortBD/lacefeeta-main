import { TramOutlined } from "@material-ui/icons";
import * as Types from "../Type/Types";

const initialState = {
  ShopList: [],
  error: false,
  isLoading: false,
  paginate: {
    currentPage: 1,
    pageCount: [],
    perPage: null,
    totalCount: null,
  }
};
function ShopReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_SHOP_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_SHOP_LIST:
      const totalPage_ = Math.ceil(parseInt(payload.total) / parseInt(payload.per_page));
      return {
        ...state,
        ShopList: payload.data,
        isLoading: false,
        error: false,
        paginate: {
          ...state.paginate,
          currentPage: payload.current_page,
          pageCount: [...Array(totalPage_).keys()],
          perPage: parseInt(payload.per_page),
          totalCount: parseInt(payload.total)
        }
      };

    case Types.FETCH_SHOP_LIST_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}
export default ShopReducer;
