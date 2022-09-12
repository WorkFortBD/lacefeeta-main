import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';

const PageMeta = (props) => {
    const { title = '', description = '', keywords = '', pageSocialMetaUrl, pageSocialMetaImage, pageSocialMetaAltImage,
        websiteName="Lacefeeta", facebookAppID, twitterSiteUsername, ogpEnabled, type = '' } = props;

    // OGP -> Open Graph Protocol
    // Social meta tags
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {
                keywords && <meta name="keywords" content={keywords} /> 
            }

            {
                ogpEnabled && (
                    <>
                        {/* Social Meta tags */}
            
                        {/* Facebook, whatsapp, instagram, twitter and other popular social media */}
                        <meta property="og:site_name" content={websiteName} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={description} />
                        <meta property="og:url" content={pageSocialMetaUrl} />
                        <meta property="og:image" content={pageSocialMetaImage} />
                        <meta property="og:type" content={type} />
                        {
                            pageSocialMetaImage && <meta name="twitter:card" content={pageSocialMetaImage} />
                        }
                        
            
                        {/* Some Non-essential but recommended */}
                        {
                            pageSocialMetaAltImage && <meta name="twitter:image:alt" content={pageSocialMetaAltImage} />
                        }
                        
                        {/* If has need analytics for facebook and twitter */}
                        { typeof facebookAppID !== 'undefined' && <meta property="fb:app_id" content={facebookAppID} /> } 
                        { typeof twitterSiteUsername !== 'undefined' && <meta property="twitter:site" content={`@${twitterSiteUsername}`} /> } 
                    </>
                )
            }
        </Head>
    );
}

PageMeta.defaultProps = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
};

// PageMeta.propTypes = {

// };

export default PageMeta;