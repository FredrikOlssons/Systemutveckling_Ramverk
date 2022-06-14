import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

export default function MyCards() {
  const {
    wrapperProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper {...wrapperProps}>
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
	 


	  <button type='submit' onClick={() => console.log()}>Submit</button>
    </PaymentInputsWrapper>
  );
}