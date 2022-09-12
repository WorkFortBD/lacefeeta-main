import React from 'react';
import Link from 'next/link';

const DeliveryFeatures = ({ product }) => {
    const {location} = product.business;
    const hours = product.approx_delivery_time / 60;
    const days = Math.floor(hours / 24);

    return (
        <div className='pt-4'>
            <div className='d-flex pb-3'>
                <div className='color-main'>
                    <i className="fas fa-store"></i>
                </div>
                <div className='pl-3'>
                    <span className='font-weight-600 d-block'>Store Name</span>
                    <span>
                        <Link href={`/store/${product.business.slug}`}>
                            <a className='color-main font-weight-500 font-14'>
                                {
                                    product.business && product.business.name
                                }
                            </a>
                        </Link>
                    </span>
                </div>
            </div>

            <div className='d-flex pb-3'>
                <div className='color-main'>
                    <i className="fas fa-money-check-alt"></i>
                </div>
                <div className='pl-3'>
                    <span className='font-weight-600 d-block'>Payment</span>
                    <span className='font-14 font-weight-500 d-block'>
                        Cash on delivery available
                    </span>
                    <span className='font-14 font-weight-500'>
                        Accepts online payments
                    </span>
                </div>
            </div>

            <div className='d-flex pb-3'>
                <div className='color-main'>
                    <i className="fas fa-truck"></i>
                </div>
                <div className='pl-3'>
                    <span className='font-weight-600 d-block'>Tentative Delivery Time</span>
                    <span className='font-14 font-weight-500'>
                        Within 4 hours to 72 hours
                    </span>
                </div>
            </div>

            {/* <div className='d-flex pb-3'>
                <div className='color-main'>
                    <i class="fas fa-file-alt"></i>
                </div>
                <div className='pl-4'>
                    <span className='font-weight-600 d-block'>Delivery Charge</span>
                    <ul className='pl-3 font-14 font-weight-500'>
                        <li>60 BDT 	&#8212; Dhaka city only</li>
                        <li>120 BDT &#8212; Outside Dhaka</li>
                        <li>Delivery charges may vary with product size, weight, quantity and delivery location</li>
                    </ul>
                </div>
            </div> */}

            <div className='border-top-1-light pt-3 pb-4'>
                <span className='font-weight-600 font-14 d-inline-block pb-2'>
                    Additionally you can place an order by calling the following number
                </span>
                <div className='text-white bg-color-main py-2 px-3 rounded' style={{width: 'fit-content'}}>
                    <span>
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                    <span>
                        &nbsp;
                        <a className='text-white font-weight-500 font-14' href="tel:+880 1709805059">+880 1709805059</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DeliveryFeatures;