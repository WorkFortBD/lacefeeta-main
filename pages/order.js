import React from 'react';
// import ProtectedRoute from '../components/master/protectedRoute/ProtectedRoute';
// import ProfileSideBar from "../components/myprofile/ProfileSideBar";
// import OrderList from "../components/orders/OrderList";

import dynamic from 'next/dynamic';
import withProtectedRoute from '../components/master/hoc/withProtectedRoute';
const ProfileSideBar = dynamic(() => import('../components/myprofile/ProfileSideBar'));
const OrderList = dynamic(() => import('../components/orders/OrderList'));

const order = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 d-none d-md-block">
                    <ProfileSideBar />
                </div>
                <div className="col-md-9">
                    {/** user order list here */}
                    <OrderList />
                </div>
            </div>
        </div>
    );
};

// export default ProtectedRoute(order);
export default withProtectedRoute(order)