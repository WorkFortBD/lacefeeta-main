import { memo, useState, useEffect } from 'react';
import { translate } from '../../services/translation/translation';

/**
 * Translate Component
 * 
 * This component make the whole Translation of the project
 * 
 * Example Use case - 
 * ```
 * 1) <Translate>Hello World</Translate>
 * 2) translate('Hello World');
 * ```
 * 
 * @param {string} children object as string or html 
 * @returns 
 */
const Translate = ({ children }) => {
    const [data, setData] = useState(children)

    useEffect(() => {
        if ( typeof children !== 'undefined' && children.length === '' ) {
            return '';
        } else {
            setData(translate( children.trim() ));
        }
    }, []);

    return data;
}
 
export default memo(Translate);