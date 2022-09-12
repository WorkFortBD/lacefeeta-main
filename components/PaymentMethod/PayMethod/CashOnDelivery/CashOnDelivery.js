import React from 'react';

const CashOnDelivery = () => {
    return (
        <div className="cash bg-white border p-3 mb-5">
            <p>You can pay in cash to our courier when you receive the goods at your doorstep.</p>
            <button className="btn custom-pay-btn mt-5">
                CONFIRM ORDER
            </button>
        </div>
    );
};

export default CashOnDelivery;