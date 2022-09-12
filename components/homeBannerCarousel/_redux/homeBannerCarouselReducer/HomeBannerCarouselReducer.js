import * as Types from "../Type/Types";

const initialState = {
  carouselList: [],
  isLoading: false,
  error: false,
};
function HomeBannerCarouselReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_BANNER_CAROUSEL_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_BANNER_CAROUSEL_LIST:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: false,
      };

    case Types.FETCH_BANNER_CAROUSEL_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
}
export default HomeBannerCarouselReducer;
