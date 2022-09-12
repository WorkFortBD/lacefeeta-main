import { formatCurrency } from "../services/currency";
import { productHasOffer } from "../services/ProductService";

function priceCalculation(product) {
    const { is_offer_enable: isOfferEnable, offer_selling_price, default_selling_price } = product;

    const sellingPrice = default_selling_price;
    const offerPrice = offer_selling_price;

    const is_offer_enable  = productHasOffer(sellingPrice, offerPrice, isOfferEnable);
    const selling_price    = ( typeof sellingPrice !== 'undefined' && sellingPrice !== null ) ? sellingPrice : 0;
    const default_price    = ( is_offer_enable && offerPrice != 0 && offerPrice !== null ) ? offerPrice: selling_price;
    const offer_price      = ( is_offer_enable && offerPrice != 0 && offerPrice !== null) ? offerPrice: 0;
    const discount_percent = ( ( selling_price - offer_price ) * 100 ) / selling_price;

    // const discount = '' +  Math.round( discount_percent * 1e2 ) / 1e2; // return 2 digit after point. haven't use toFixed cause toFixed return String value
    const discount = '' +  Math.round( discount_percent); // return 2 digit after point. haven't use toFixed cause toFixed return String value

    const floorNum = (val) => Math.floor(val)

    return {
        isOfferEnable: is_offer_enable,
        offerPrice: offer_price,
        discount: discount,
        displayActivePrice: formatCurrency(floorNum(default_price)),
        displayInactivePrice: formatCurrency(floorNum(selling_price))
    }
}

export default priceCalculation;