import React from "react";

import dynamic from 'next/dynamic'
import withProtectedRoute from "../components/master/hoc/withProtectedRoute";

const ProductWishList = dynamic(() => import('../components/Wishlist/ProductWishList'));

const wishlist = () => {

    return (
        <ProductWishList />
    );
}

export default withProtectedRoute(wishlist);