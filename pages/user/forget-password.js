import React from 'react'
// import ForgetPassword from '../../components/forget-password/ForgetPassword'

import dynamic from 'next/dynamic';
const ForgetPassword = dynamic(() => import('../../components/forget-password/ForgetPassword'));

export default function ForgetPasswordPage() { 
    return (
        <ForgetPassword />
    )
}

