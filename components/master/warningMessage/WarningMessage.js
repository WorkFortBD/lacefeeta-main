import React from 'react';
/**
 * since 1.0.0
 * 
 * @param text
 * @returns WarningMessage
 */
const WarningMessage = ({text}) => {
    return (
        <div className="custom_warning_message">
            <span> {text} </span>
        </div>
    );
};
export default WarningMessage;