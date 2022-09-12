import React from "react";
// import PaymentMethod from '../components/PaymentMethod/PaymentMethod'

import dynamic from 'next/dynamic';
const PaymentMethod = dynamic(() => import('../components/PaymentMethod/PaymentMethod'));

export default function paymentSystem() {
  return (
    <PaymentMethod />
  );
}
