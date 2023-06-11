import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ classPayment, price }) => {
    // console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    // const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();
    const { class_name, class_image, instructor_name, selectedClassId, student_email, _id: selectedClassDbId } = classPayment;

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price: price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            return setCardError(error.message);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || "unknown",
                        name: user.displayName || "anonymous",
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
        }

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            // setTransactionId(paymentIntent.id);
            toast.success(`Payment succeeded with transaction Id ${paymentIntent.id}`)
            const payment = {
                transactionId: paymentIntent.id,
                date: new Date(),
                enrolledClass: { student_email, selectedClassId, class_name, class_image, instructor_name, price },
                selectedClassDbId
            }
            axiosSecure.post("/payments", payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        toast.success("Payment added on database")
                    }
                })
            navigate(-1)
        }

    }

    return (
        <form className='space-y-6' onSubmit={handleSubmit}>
            <CardElement
                className='border rounded-lg p-4'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {/* {transactionId && <p className='text-green-600'>Payment succeeded with transaction Id {transactionId}</p>} */}
            <button className='btn btn-outline font-bold w-2/5 border-neutral-content' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>

    );
};

export default CheckOutForm;