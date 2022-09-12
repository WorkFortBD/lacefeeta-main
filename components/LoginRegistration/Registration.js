import React from 'react';
import RegistrationComponent from './components/RegistrationComponent'
import withProtectedRoute from '../master/hoc/withProtectedRoute';
const Registration = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center my-3">
                <div className="col-md-9 col-lg-7 p-sm-3 px-0">
                    <div className="account_info bg-white rounded shadow-sm p-lg-5 py-4 px-3">
                        <h1 className="text-center color-main">SIGN UP</h1>
                        <RegistrationComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withProtectedRoute(Registration, true);