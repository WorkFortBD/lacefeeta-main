import * as Types from "../types/types";

const initialState = {
    email: "",
    otp: null,
    isValidUser: false,
    isOtpVerified: false,
    passwordUpdated: false,
    isLoading: false
};

const forgetPasswordReducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case Types.CHECK_EMAIL_STATUS:
      return {
        ...state,
        email: payload.email,
        isLoading: payload.loading,
        isValidUser: payload.isValidUser
      };

    case Types.VALIDATE_OTP:
      return {
        ...state,
        isLoading: payload.loading,
        isOtpVerified: payload.otpVerified,
        otp: payload.otp
      };

    case Types.POST_RESET_PASSWORD:
      return {
        ...state,
        isLoading: payload.loading,
      };

    case Types.SUCCESSFULLY_RESET_PASSWORD:
      return {
        ...state,
        passwordUpdated: payload.passwordUpdated,
        email: "",
        otp: null,
        isValidUser: false,
        isOtpVerified: false,
        isLoading: false
      };

    case Types.RESET_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: payload.loading,
        isOtpVerified: false
      };

    default:
      return state;
  }
}

export default forgetPasswordReducer;
