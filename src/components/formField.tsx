import { FC, CSSProperties, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Alert, Grid, Snackbar } from '@mui/material';
import { Button } from "@mui/material";
import { Customer } from './interfaces/customer';
import { CartContext } from './context/cartProvider';
import { Device, DeviceContext } from "./context/DeviceProvider";
import React from 'react';


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')

    .matches(/^[aA-zZ\s]+$/, "Only letters are allowed! ")
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, "Only letters are allowed! ")
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  streetAdress: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  postalCode: Yup.string()
    .min(4, 'Too Short!')
    .length(5)
    .typeError("Must be exactly 5 digits")
    .required('Required'),
  town: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, "Only letters are allowed! ")
    .required('Required'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, "Only letters are allowed! ")
    .required('Required'),
  phoneNumber: Yup.number()
    .min(2, 'Too Short!')
    .required('Required')
    .typeError("Must be a number")
    .test('len', 'Must be 10 numbers', phoneNumber => phoneNumber!.toString().length === 9),
});

export const ValidationSchemaExample = () => {
  const { devices } = useContext(DeviceContext)

  const { setCustomer, customer } = useContext(CartContext)

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
      setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

  return (
    <div style={formStyling(devices)}>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          streetAdress: '',
          postalCode: '',
          town: '',
          country: '',
          phoneNumber: '',

        }}
        validationSchema={SignupSchema}
        onSubmit={values => {

          setCustomer(values as Customer)
          
        }}
      >

        {({ errors, touched }) => (
          <>
            <Form>
              <Grid style={gridContainer(devices)}>
                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Förnamn:
                  <div style={inputForm}>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Efternamn:
                  <div style={inputForm}>
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      <div>{errors.lastName}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid(devices)} item xs={12} sm={6}>
                  E-post:
                  <div style={inputForm}>
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div>
                      : null}
                  </div>
                </Grid>

                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Address:
                  <div style={inputForm}>
                    <Field name="streetAdress" />
                    {errors.streetAdress && touched.streetAdress ? (
                      <div>{errors.streetAdress}</div>
                    ) : null}
                  </div>
                </Grid>
              </Grid>
            </Form>

            <Form>
              <Grid style={gridContainer(devices)}>
                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Postnummer:
                  <div style={inputForm}>
                    <Field name="postalCode" />
                    {errors.postalCode && touched.postalCode ? (
                      <div>{errors.postalCode}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Stad:
                  <div style={inputForm}>
                    <Field name="town" />
                    {errors.town && touched.town ? (
                      <div>{errors.town}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Land:
                  <div style={inputForm}>
                    <Field name="country" />
                    {errors.country && touched.country ? (
                      <div>{errors.country}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid(devices)} item xs={12} sm={6}>
                  Tel.nummer:
                  <div style={inputForm}>
                    <Field name="phoneNumber" />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div>{errors.phoneNumber}</div>
                    ) : null}
                  </div>
                </Grid>
                <Grid style={submitStyling} item xs={12} sm={6}>

                {
                  customer ? <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      informationen har sparats!
                  </Alert>
                </Snackbar> : <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                        Var vänlig och fyll i samtliga information!
                    </Alert>
                </Snackbar>
                }
                <div onClick={handleClick} >
                  <Button type="submit" variant="contained" color="primary">Vidare</Button>
                  </div>
                
                </Grid>
              </Grid>
            </Form>
          </>
        )}
      </Formik>
    </div>
  )
};

const formStyling: (devices: Device) => CSSProperties = (devices) => {
  return {
    display: "flex",
    justifyContent: 'center',
    flexWrap: "wrap"
  }
}

const gridContainer: (devices: Device) => CSSProperties = (devices) => {
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "20px",
    marginLeft: "5%",
    marginBottom: "20px",
    minWidth: devices.isSmallerMobile ? '200px' : '300px',
  }
}

const grid: (devices: Device) => CSSProperties = (devices) => {
  return {
    display: "flex",
    justifyContent: devices.isSmallerMobile ? 'center' : "space-between",
    width: '90%',
    flexWrap: devices.isSmallerMobile ? 'wrap' : undefined,
  }
}

const submitStyling: CSSProperties = {
  display: "flex",
  justifyContent: "center"
}

const inputForm: CSSProperties = {
  display: "flex",
  flexDirection: "column"
}


export default ValidationSchemaExample;




