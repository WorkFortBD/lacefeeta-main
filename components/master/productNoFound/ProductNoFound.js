import React from 'react';

const ProductNoFound = ({title = null, description = null}) => {
    return (
        <div className="search_product_no_found">
            <h4 className="product_no_found_title text-danger"> {title === null ? "No product found !" : title} </h4>
            <p className="product_no_found_description">
                {description === null ? "We're sorry. We cannot find any matches for your search term." : description}
            </p>
            <div className="search_product_not_found_img_box">
                <img src="/images/no-product.png" alt="error" />
            </div>
        </div>
    );
};

export default ProductNoFound;