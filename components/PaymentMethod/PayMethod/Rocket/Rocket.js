import React from 'react';

const Rocket = () => {
    return (
        <div className="bkash bg-white border p-3 mb-5">
            <p>1) Users paying with rocket for the first time: Enter rocket Wallet Number and OTP for successful account saving.</p>
            <p>2) For all subsequent users: Enter PIN to make payment </p>

            <p className="mt-3 mb-3">
                Disclaimer: you will be redirected back to Checkout for first transaction to complete payment
            </p>
            <p className="font-weight-bold">
                Please Note
            </p>
            <p>  1. You have an activated rocket account </p>
            <p>  2. Ensure you have sufficient balance in your rocket account to cover the total cost of the order</p>
            <p>  3. Ensure you are able to receive your OTP (one-time-password) on your mobile and have rocket PIN</p>

            <p className="mt-3 mb-3">
                ***Please note that one rocket account can only be saved in one Daraz account.***
            </p>
            <button className="btn custom-pay-btn">
                PAY NOW
            </button>
        </div>
    );
};

export default Rocket;