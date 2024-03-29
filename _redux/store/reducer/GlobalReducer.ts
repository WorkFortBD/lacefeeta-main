import * as types from "../types/types";
import { IWebsiteData } from '../../../interfaces/index';

export interface IGlobalReducer {
  isModalActive: boolean;
  floatingCartVisible: boolean;
  backdrop: boolean;
  isMobile: boolean;
  isSignedIn: boolean;
  welcomePopup: boolean;
  websiteInfoLoading: boolean;
  websiteInfo: IWebsiteData | null
}

const initialState = {
  isModalActive: false,
  floatingCartVisible: false,
  backdrop: false,
  isMobile: false,
  isSignedIn: false,
  welcomePopup: false,
  websiteInfoLoading: true,
  websiteInfo: null,
};

const GlobalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_FLOATING_CART:
      const isModalVisible =
        typeof payload !== "undefined" && typeof payload === "boolean"
          ? payload
          : !state.floatingCartVisible;

      return {
        ...state,
        backdrop: !state.backdrop,
        floatingCartVisible: isModalVisible,
      };

    case types.TOGGLE_BACKDROP:
      return {
        ...state,
        backdrop: !state.backdrop,
      };

    case types.TOGGLE_MODAL:
      return {
        ...state,
        isModalActive: !state.isModalActive,
        floatingCartVisible: false,
      };

    case types.GET_DEVICE_INFO:
      return {
        ...state,
        isMobile: payload,
      };

    case types.IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: payload,
      };

    case types.SET_WELCOME_POPUP:
      return {
        ...state,
        welcomePopup: payload,
      };

    case types.SET_WEBSITE_INFO_LOADING:
      return {
        ...state,
        websiteInfoLoading: payload,
      };

    case types.SET_WEBSITE_INFO:
      return {
        ...state,
        websiteInfo: payload,
      };

    default:
      return state;
  }
};

export default GlobalReducer;
