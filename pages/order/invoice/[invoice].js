import { useRouter } from "next/router";
import React from "react";
// import OrderInvoice from "../../../components/orders/OrderInvoice";
import { translate } from "../../../services/translation/translation";

import dynamic from 'next/dynamic';
const OrderInvoice = dynamic(() => import('../../../components/orders/OrderInvoice'));

export default function invoice() {
    const router      = useRouter();
    const { invoice } = router.query;

    return (
        <div className="container" id="order-success-page">
            {
                invoice && (
                    <OrderInvoice title={translate('Invoice')} id={invoice} is_invoice={true} />
                )
            }
        </div>
    );
}