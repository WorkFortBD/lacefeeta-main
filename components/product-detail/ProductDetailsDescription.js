import React from 'react';
import DOMPurify from 'dompurify';

const ProductDetailsDescription = ({ product }) => {

    return (
        <div className="product_description">
            <p className="product-description__head">Description</p>
            <div className="product-details__rich-text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(product.description)}}></div>
        </div>
    );
};

export default ProductDetailsDescription;