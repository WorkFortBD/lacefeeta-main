import React from "react";
// import ProtectedRoute from "../components/master/protectedRoute/ProtectedRoute";
// import ProductReview from '../components/product-review/ProductReview';


import dynamic from 'next/dynamic';
import withProtectedRoute from "../components/master/hoc/withProtectedRoute";
const ProductReview = dynamic(() => import('../components/product-review/ProductReview'));

function productReview() {
    return (
        <div className="container">
            <ProductReview />
        </div>
    );
}

// export default ProtectedRoute(productReview);
export default withProtectedRoute(productReview)