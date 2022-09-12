import React from 'react';
// import BrandListFullContainer from '../components/Shop/BrandListFullContainer';

import dynamic from 'next/dynamic';
const BrandListFullContainer = dynamic(() => import('../components/Shop/BrandListFullContainer'));

function Brands() {
    return (
        <div className="container">
            <div className="row my-3 pl-1 pl-sm-2">
                <h4>
                    All brands
                </h4>
            </div>
            <BrandListFullContainer />
        </div>
    )
}

export default Brands;
