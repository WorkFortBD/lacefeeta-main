import React from 'react';
import priceCalculation from '../../../helper/price-calculation';
import { productHasOffer } from '../../../services/ProductService';

const PriceCalculation = ({ item }) => {
    const {isOfferEnable, offerPrice, discount, displayActivePrice, displayInactivePrice} = priceCalculation(item);

    return (
        <div className="price-area">
            <p className="active-price">
                { displayActivePrice }
            </p>

            {
                (isOfferEnable && offerPrice !== 0) &&
                <p className="inactive-price">
                    <del>{ displayInactivePrice }</del>
                    &nbsp;
                    <span className="discount-percent">
                        {discount}% Off
                    </span>
                </p>
            }
        </div>
    );
}

export default PriceCalculation;