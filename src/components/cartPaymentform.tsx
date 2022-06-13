import React, {FC} from 'react';
import { Formik, Field, Form } from 'formik';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import { images } from 'react-payment-inputs/images';
import Button from '@material-ui/core/Button'; 



interface Props {
  
}
 




const PaymentForm: FC<Props> = (props) => {
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps
  } = usePaymentInputs();

  

  return (
    <Formik
      initialValues={{
        cardNumber: '',
        expiryDate: '',
        cvc: ''
      }}
      onSubmit={data => console.log(data)}
      validate={() => {
        let errors: Record<string, unknown> = {}
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        if (meta.erroredInputs.cvc) {
          errors.cvc = meta.erroredInputs.cvc;
        }
        return errors;
      }}
      
   
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <PaymentInputsWrapper {...wrapperProps}>
              <svg {...getCardImageProps({ images })} />
              <Field name="cardNumber">
                {({ field }) => (
                  <input {...getCardNumberProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                )}
              </Field>
              <Field name="expiryDate">
                {({ field }) => (
                  <input {...getExpiryDateProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                )}
              </Field>
              <Field name="cvc">
                {({ field }) => <input {...getCVCProps({ onBlur: field.onBlur, onChange: field.onChange })} />}
              </Field>
            </PaymentInputsWrapper>
          </div>
          <Button type="submit">
            Submit
          </Button>
        </form>
      )}
      </Formik>
      )
                }

                export default PaymentForm