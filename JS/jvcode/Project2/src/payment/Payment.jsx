/* eslint-disable no-unused-vars */
import React from 'react';
import './Payment.css'
import PaymentDetail from './PaymentDetail';
import Referral from './Referral';
const Payment = () => {

    return (
        <div className='container'>
        <Referral/>
        <PaymentDetail/>
        </div>
           );
};

export default Payment;
