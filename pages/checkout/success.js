import React from "react";
// import OrderSuccess from "../../components/orders/OrderSuccess";

import dynamic from 'next/dynamic';
const OrderSuccess = dynamic(() => import('../../components/orders/OrderSuccess'));

export default function CheckoutSuccess() {
    return (
        <div className="container" id="order-success-page">
            <OrderSuccess />
        </div>
    );
}