export const getImagePublicPath = () => {
    return process.env.NEXT_PUBLIC_URL + 'images';
}

/**
 * Get Image URL
 *
 * @param {string} url          Product Image name or file name
 * @param {string} imageType    Image type, eg: product, category, brand
 *
 * @returns
 */
export const getImageUrl = (imageName, imageType) => {
    let url = null;

    switch (imageType) {

        case 'product':
            url = `${getImagePublicPath()}/products/${imageName}`;
            break;

        case 'product-rating':
            url = `${getImagePublicPath()}/product-ratings/${imageName}`;
            break;

        case 'page':
            url = `${getImagePublicPath()}/pages/${imageName}`;
            break;

        case 'gift-card':
            url = `${getImagePublicPath()}/giftcards/${imageName}`;
            break;

        case 'category':
            url = `${getImagePublicPath()}/categories/${imageName}`;
            break;

        case 'brand':
            url = `${getImagePublicPath()}/brands/${imageName}`;
            break;

        case 'slider':
            url = `${getImagePublicPath()}/sliders/${imageName}`;
            break;

        case 'coupon':
            url = `${getImagePublicPath()}/coupons/${imageName}`;
            break;

        case 'website':
            url = `${getImagePublicPath()}/websites/${imageName}`;
            break;

        case 'vendor':
            url = `${getImagePublicPath()}/vendors/${imageName}`;
            break;

        case 'voucher':
            url = `${getImagePublicPath()}/vouchers/${imageName}`;
            break;

        case 'payment-method':
            url = `${getImagePublicPath()}/payment-methods/${imageName}`;
            break;

        default:
            return url;
    }

    return url;
}