import React from "react";
// import ProfileSideBar from "../../components/myprofile/ProfileSideBar";
// import OrderDetails from "../../components/orders/OrderDetails";

import dynamic from 'next/dynamic';
const ProfileSideBar = dynamic(() => import('../../components/myprofile/ProfileSideBar'));
const OrderDetails = dynamic(() => import('../../components/orders/OrderDetails'));

export default function ManageOrder() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ProfileSideBar />
                </div>
                <div className="col-md-9">
                    <OrderDetails />
                </div>
            </div>
        </div>
    );
}