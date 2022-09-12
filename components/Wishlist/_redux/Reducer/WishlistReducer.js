import * as Types from "../Types/Types";
const initialState = {
    isLoading: false,
    wishList: [],
    wishListItemsId: {},
};

const WishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.WISHLIST_ADDED:
            return {
                ...state,
                wishListItemsId: {
                    ...state.wishListItemsId,
                    [action.payload]: action.payload
                }
            }

        case Types.REMOVE_FROM_WISHLIST:
            const updatedWishItemList = { ...state.wishListItemsId };
            delete updatedWishItemList[action.payload]

            return {
                ...state,
                wishListItemsId: updatedWishItemList
            }

        case Types.GET_WISHLIST_DATA:
            const itemsId = {};
            for(const element of action.payload.wishList) {
                itemsId[element.item_id] = element.item_id
            }

            return {
                ...state,
                wishList: action.payload.wishList,
                wishListItemsId: itemsId,
                isLoading: false,
                loadWishlistOnce: true
            }

        default:
            return state;
    }
};

export default WishlistReducer;
