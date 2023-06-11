import React from 'react';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useSelectedClassess from '../../../hooks/useSelectedClassess';
// import useAuth from '../../../hooks/useAuth';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const PaymentPage = () => {
    // const { loading } = useAuth();
    const { classId } = useParams();
    const [selectedClasses, , selectedClassesLoading] = useSelectedClassess();

    if (selectedClassesLoading) {
        return
    }

    const classPayment = selectedClasses.find(selectedClasse => selectedClasse._id === classId);
    if(!classPayment){
        return
    }
    // console.log(classPayment)
    const price = parseFloat((classPayment.price).toFixed(2))
    // console.log(price)
    return (
        <div className='w-1/2'>
            <Elements stripe={stripePromise}>
                <CheckOutForm classPayment={classPayment} price={price} />
            </Elements>
        </div>
    );
};

export default PaymentPage;