import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductRating = ({ rating, size = 15, edit = false, color = '#e8e8e8', activeColor = '#ffd700' }) => {
    return (
        <div className="rating">
            <ReactStars
                value={parseInt(rating)}
                color={color}
                size={size}
                edit={edit}
                activeColor={activeColor}
            />
        </div>
    );
}

export default ProductRating;