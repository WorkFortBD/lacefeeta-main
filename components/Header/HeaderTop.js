import React, { useState, useEffect } from 'react';
import { getCurrencies } from '../../services/currency';
import Modal from '../master/modal/Modal';
import TrackingForm from './TrackingForm';
import Translate from '../translation/Translate';
import content from '../../content.json';

const HeaderTop = () => {
    const [currencies, setCurrencies] = useState([]);
    const [show, setShow]             = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCurrencies(getCurrencies());
    }, []);

    const toggleActiveLanguage = (currency) => {
        if (process.browser) {
            localStorage.setItem('lang', currency.slug);
            window.location.reload();
        }
    }

    return (
        <section className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <p className="heading-top-text">
                          <span className="d-none d-lg-block">  Get Your <span className="holyday-shopping">Holiday Shopping</span> On Wholesale Pricing</span>
                        </p>
                    </div>
                    <div className="col-md-7 heading-top-right">
                        <div className="row justify-content-end">
                            <p className="heading-top-text pointer mr-3">
                                <a
                                    href={content.seller_url}
                                    target="_blank"
                                    style={{ color: '#fff', textDecoration: 'none' }} >
                                    <i className="fas fa-user"></i>
                                    {' '}
                                    <Translate>Become a Seller</Translate>
                                </a>
                            </p>

                            {/* <p className="heading-top-text pointer" onClick={() => handleShow()}>
                                <i className="fas fa-shipping-fast"></i>
                                {' '}
                                <Translate>Track Order</Translate>
                            </p> */}
                            <div className="dropdown-currency">
                                {
                                    currencies.length > 0 && currencies.map((currency, index) => {
                                        if(index === 0) {
                                            return (
                                                <span onClick={() => toggleActiveLanguage(currency)} key={index}>
                                                    {currency.slug.toUpperCase()}
                                                    {' '}
                                                    &#124;
                                                    {' '}
                                                </span>
                                            )
                                        } else {
                                            return (
                                                <span onClick={() => toggleActiveLanguage(currency)} key={index}>
                                                    {currency.slug.toUpperCase()}
                                                </span>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                closeModalHandler={handleClose}
                visible={show}
            >
                <TrackingForm show={show} setShow={setShow} />
            </Modal>
        </section>
    );
};

export default HeaderTop;