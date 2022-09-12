import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";
import Axios from "axios";
import { showToast } from "../../../master/Helper/ToastHelper";

const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: 14,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SpliteCardForm = ({ transaction }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [error, setError] = useState(null);


    const [billingDetails, setBillingDetails] = useState({
        email: "m.akash.cse@gmail.com",
        phone: "01314925185",
        name: "Md. Maniruzzaman Akash"
    });

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement);
        const result = await stripe.createToken(card);
        // const result = await stripe.createToken({
        //     type: 'card',
        //     card,
        //     billingDetails
        // });

        // const payload = await stripe.createPaymentMethod({
        //     type: "card",
        //     card: elements.getElement(CardNumberElement)
        // });
        // console.log("[PaymentMethod]", payload);

        if (result.error) {
            alert(result.error.message);
        } else {
            stripeTokenHandler(result.token);
        }
    };

    function stripeTokenHandler(token) {
        const paymentData = { token: token.id };

        const data = {
            order_id: transaction.id,
            payload: paymentData.token
        }

        Axios.post(`payments`, data)
            .then(res => {
                if (res.data.status) {
                    localStorage.removeItem('carts');
                    localStorage.removeItem('tr');
                    showToast('success', res.data.message);

                    setTimeout(() => {
                        window.location.href = '/';
                      }, 1000);
                } else {
                    showToast('error', res.data.message);
                }
            });
    }

    return (
        <div className="card p-3 mb-5 mt-2 splitCardForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Card number
                    <CardNumberElement options={options} />
                </label>
                <label>
                    Expiration date
                    <CardExpiryElement options={options} />
                </label>
                <label>
                    CVC
                    <CardCvcElement options={options} />
                </label>

                <button type="submit" className="btn custom-pay-btn" disabled={!stripe}>
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default SpliteCardForm;