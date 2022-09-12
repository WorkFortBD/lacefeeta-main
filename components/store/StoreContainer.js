import React from 'react';
import Translate from '../translation/Translate';
import StoreList from './StoreList';
import Link from 'next/link';

const StoreContainer = () => {
    return (
        <section className="container product-container">
            <div className="product-heading">
                <h2>
                    <Translate>Shop by stores</Translate>
                </h2>
                <Link href={{ pathname: '/stores'}}>
                    <div className="custom-button-component pointer " >
                        View all
                        {' '}
                        <span>
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </Link>
            </div>
            <StoreList />
        </section>
    );
};

export default StoreContainer;