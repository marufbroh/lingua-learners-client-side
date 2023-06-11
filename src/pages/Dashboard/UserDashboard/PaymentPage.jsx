import React from 'react';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useSelectedClassess from '../../../hooks/useSelectedClassess';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const PaymentPage = () => {
    const { classId } = useParams();
    const [selectedClasses] = useSelectedClassess();

    const classPayment = selectedClasses.find(selectedClasse => selectedClasse._id === classId)
    console.log(classPayment)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm classPayment={classPayment} />
            </Elements>
        </div>
    );
};

export default PaymentPage;