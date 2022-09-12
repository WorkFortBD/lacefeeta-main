import React from "react";
import content from "../../content.json";
import { getWebsiteData } from '../../_redux/store/action/globalAction';

const SocialMedia = () => {
  return (
    <ul className="social-media mb-0">
      {getWebsiteData('facebook_link').length > 0 && (
        <li className="social-facebook">
          <a
            href={getWebsiteData('facebook_link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      )}

      {getWebsiteData('youtube_link').length > 0 && (
        <li className="social-youtube">
          <a
            href={getWebsiteData('youtube_link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      )}

      {getWebsiteData('twitter_link').length > 0 && (
        <li className="social-twitter">
          <a
            href={getWebsiteData('twitter_link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      )}

      {getWebsiteData('linkedin_link').length > 0 && (
        <li className="social-linkedIn">
          <a
            href={getWebsiteData('linkedin_link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      )}

      {getWebsiteData('whatsapp_link').length > 0 && (
        <li className="social-whatsApp">
          <a
            href={getWebsiteData('whatsapp_link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      )}

      {getWebsiteData('instagram_link').length > 0 && (
        <li className="social-instagram">
          <a
            href={getWebsiteData('instagram_link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialMedia;
