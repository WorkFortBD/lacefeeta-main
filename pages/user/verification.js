import React from 'react';
// import UserVerification from '../../components/forget-password/UserVerification';

import dynamic from 'next/dynamic';
const UserVerification = dynamic(() => import('../../components/forget-password/UserVerification'));

export default function Verification() { 
    return (
        <UserVerification />
    )
}