import React from 'react';
import withProtectedRoute from '../master/hoc/withProtectedRoute';
import LoginComponent from './components/LoginComponent';
const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center my-3">
                    <div className="col-md-8 p-sm-3 px-0">
                        <div className="account_info bg-white rounded shadow-sm p-lg-5 py-4 px-3">
                            <h1 className="text-center color-main">SIGN IN</h1>
                            <LoginComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withProtectedRoute(Login, true);