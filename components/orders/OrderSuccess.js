import React, {useEffect} from 'react';
import OrderInvoice from './OrderInvoice';
import { translate } from '../../services/translation/translation';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from './_redux/action/OrderAction';

const OrderSuccess = ({ id }) => {
    
    return (
        <OrderInvoice title={translate('Order Successfull')} id={id} />
    );
}

export default OrderSuccess;