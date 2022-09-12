import React from "react";

/**
 * Page Title Component
 * 
 * Component for using all pages title or as description
 * 
 * @since 1.0.0
 * 
 * @param string title - required
 * @param string description - nullable
 *  
 * @return PageTitle
 */
const PageTitle = ({ title = '', description = null }) => {
  return (
    <>
      <h4 className='page-title'>{title}</h4>
      {
        description !== null && <p className='page-description'>{description}</p>
      }
    </>
  );
};

export default PageTitle;