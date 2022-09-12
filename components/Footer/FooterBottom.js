import React from 'react';
import SocialMedia from './SocialMedia';
import { getWebsiteData } from '../../_redux/store/action/globalAction';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-12">
                        <div className="footer-bottom-info">
                            <div>
                                <span>{getWebsiteData('footer_text')}</span>
                            </div>
                            <div>
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FooterBottom;