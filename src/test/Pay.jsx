import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const key =
  'pk_test_51MRr7wHrfJgSm0P7T9aDlwelCZDszaLytw5jMDfXoXrkMUFqkJiJDEk6MOLDENKS6mM5FTkQ1GxQNpiglVJYBm0c00Y3i0Iptv';

const Pay = () => {
  //
  const [stripeToken, setStripeToken] = useState('');

  const onToken = token => {
    setStripeToken(token);
    // console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:3001/api/checkout/payment',
          { tokenId: stripeToken.id, amount: 42000 }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.res.data);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StripeCheckout
        currency='BDT'
        name='kenakata'
        billingAddress
        shippingAddress
        description=' Your total is 420tk'
        amount={42000}
        token={onToken}
        stripeKey={key}
      >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
