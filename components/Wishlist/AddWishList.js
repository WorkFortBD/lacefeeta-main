import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addOrRemoveWishItem} from './_redux/Action/WishlistAction'

const AddWishList = ({ productId, isBtnStyle = false }) => {
    const { wishListItemsId }         = useSelector(state => state.wishlist);
    const {isSignedIn} = useSelector(state => state.global);
    const dispatch                    = useDispatch();

    const isWishItemFound = wishListItemsId[productId.toString()] == productId.toString();


    const handleAddedWishList = (productId) => {
        console.log('whish list item found => ', isWishItemFound);
        dispatch(addOrRemoveWishItem(productId, isWishItemFound, isSignedIn));
    }

    if(isBtnStyle) {
        return (
            <button
                className="btn font-weight-600"
                onClick={() => handleAddedWishList(productId)}
                style={{background: isWishItemFound ? 'var(--color-primary)' : 'transparent', border: '1px solid var(--color-primary)', color: isWishItemFound ? '#fff' : 'var(--color-primary)', width: '100%'}}
            >
                <i class="fas fa-heart"></i>
                &nbsp;
                {isWishItemFound ? 'Remove From Wishlist' : 'Add To Wishlist'}
            </button>
        )
    }

    return (
        <span className={`pointer ${isWishItemFound ? 'text-danger' : "text-secondary"}`} onClick={() => handleAddedWishList(productId)}>
            <i className="fas fa-heart"></i>
        </span>
    );
};

export default AddWishList;