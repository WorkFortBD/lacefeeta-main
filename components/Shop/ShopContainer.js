import React from 'react';
import Translate from '../translation/Translate';
import ShopList from './ShopList';
import Link from 'next/link';

const ShopContainer = () => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h2>
                    <Translate>Shop by brands</Translate>
                </h2>
                {/* <Button buttonText={translate('View all')} isFontAwesome={true} /> */}
                <Link href={{ pathname: '/brands'}}>
                    <div className="custom-button-component pointer" >
                        View all
                        {' '}
                        <span>
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </Link>
            </div>
            <ShopList />
        </section>
    );
};

export default ShopContainer;