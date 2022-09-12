/**
 * Get Product Image URL by image file name.
 *
 * @param {string} imageFileName
 *
 * @returns string
 */
export function productImageUrl(imageFileName) {
  return `${process.env.NEXT_PUBLIC_URL}images/products/${imageFileName}`;
}

/**
 * Check if item has an actual offer or not.
 *
 * This will calculate if item offer price is less than default selling price
 *
 * @param {object} item
 *
 * @return boolean
 */
export function productHasOffer(default_selling_price, offer_selling_price, isOfferEnable) {
  // if item's offer_selling_price = 0, then it's not an offer
  if (!isOfferEnable || offer_selling_price === 0) {
    return false;
  }

  // if item's offer_selling_price > 0, then it could be an offer
  // if item's default_selling_price > offer_selling_price, then it's an offer
  if (offer_selling_price > 0) {
    if (default_selling_price > offer_selling_price) {
      return true;
    }
  }

  // Otherwise it's not an offer
  return false;
}
