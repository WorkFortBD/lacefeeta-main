import React, { useMemo } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SpliteCardForm from "./SpliteCardForm";

const stripePromise = loadStripe(`pk_test_BE2H4ZqSHaRIyY6EWQNfX152`); // Stripe Public Key

const MasterCard = ({ transaction }) => {
    
    if(transaction === null || transaction === -1){
        return "Sorry, No transaction found."
    }

    return (
        <Elements stripe={stripePromise}>
            <SpliteCardForm transaction={transaction} />
        </Elements>
    );
};

export default MasterCard;
