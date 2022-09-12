import React from 'react';
/**
 *
 * button component
 *
 * @param {string} ButtonText button text,
 * @param {boolean} isFontAwesome true or false, if you want to use fontAwesome right arrow then say true otherwise false

 */
const Button = ({ buttonText, isFontAwesome }) => {
    return (
        <button className="custom-button-component">
            {buttonText}
            {
                isFontAwesome && (
                    <>
                        {' '}
                        <i className="fas fa-arrow-right"></i>
                        {' '}
                    </>
                ) 

            }
        </button>
    );
};
export default Button;