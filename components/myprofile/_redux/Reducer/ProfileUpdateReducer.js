import * as Types from "../Type/Types";

const initialState = {
    isLoading: false,
    isSubmitting: false,
    bestSellerList: [],
    shippingAddress: [],
    billingAddress: [],
    userInputData: {
        first_name: null,
        surname: null,
        last_name: null,
        email: null,
        username: null,
        phone_no: null,
        password: '123456',
        language: "en",
        avatar: null,
        banner: null,
        address: null
    },
    billingAddressInput: {
        type: "billing_address",
        user_id: null,
        transaction_id: null,
        country_id: null, //integer
        country: null,
        city_id: null,  //integer
        city: null,
        area_id: null,   //integer
        selectedCountry: null,
        selectedDivision: null,
        selectedCity: null,
        selectedArea: null,
        area: null,
        street1: null,
        street2: null,
        is_default: 1
    },
    shippingAddressInput: {
        type: "shipping_address",
        user_id: null,
        transaction_id: null,
        country_id: null, //integer
        country: null,
        city_id: null,  //integer
        selectedCountry: null,
        selectedDivision: null,
        selectedCity: null,
        selectedArea: null,
        city: null,
        area_id: null,   //integer
        area: null,
        street1: null,
        street2: null,
        is_default: 1
    },
    countryList: [],
    cityList: [],
    areaList: [],

}
function ProfileUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_SHIPPING_ADDRESS_FOR_INPUT:
            if (action.payload.status == true) {
                return {
                    ...state,
                    isLoading: action.payload.isLoading,
                    shippingAddress: action.payload.data,
                    shippingAddressInput: action.payload.data,
                }
            }
        case Types.GET_BILLING_ADDRESS_FOR_INPUT:
            if (action.payload.status == true) {
                return {
                    ...state,
                    isLoading: action.payload.isLoading,
                    billingAddress: action.payload.data,
                    billingAddressInput: action.payload.data,
                }
            }
        case Types.GET_USER_UPDATED_DATA:
            let getUserInput = { ...state.userInputData };
            getUserInput = action.payload;
            return {
                ...state,
                userInputData: getUserInput,
            }
        case Types.CHANGE_BILLING_ADDRESS_INPUT:
            const billingAddressInput = { ...state.billingAddressInput };
            billingAddressInput[action.payload.name] = action.payload.value
            return {
                ...state,
                billingAddressInput
            };
        case Types.CHANGE_SHIPPING_ADDRESS_INPUT:
            const shippingAddressInput = { ...state.shippingAddressInput };
            shippingAddressInput[action.payload.name] = action.payload.value
            return {
                ...state,
                shippingAddressInput
            };

        case Types.STORE_SHIPPING_ADDRESS:
            if (action.payload.status == true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    billingAddressInput: initialState.billingAddressInput

                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }
        case Types.STORE_BILLING_ADDRESS:
            if (action.payload.status == true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    billingAddressInput: initialState.billingAddressInput

                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }

        default:
            break;
    }
    return state;
}

// cargo list
const getCountries = (data) => {
    let options = [];
    if (data) {
        data.forEach((item) => {
            let itemData = {
                value: item.id,
                label: item.name,
            };
            options.push(itemData);
        });
    }
    return options;
};
export default ProfileUpdateReducer;