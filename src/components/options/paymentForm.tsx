import { CSSProperties, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Alert, Grid, Snackbar } from '@mui/material';
import { Button } from "@mui/material";
import { CartContext } from '../context/cartProvider';
import { Card } from '../../data/payment';
import React from 'react';


const ValSchema = Yup.object().shape({
  cardNr: Yup.string()
    .label('Card number')
    .length(16)
    .typeError("Must be a number")
    .matches(/^\d+$/, 'The field should have numbers only')
    .required(),
  name: Yup.string()
    .label('Name on card')
    .matches(/^[aA-zZ\s]+$/, "Only letters are allowed! ")
    .required(),
  dateYear: Yup.string()
    .label('Expiry year')
    .length(4)
    .typeError("Must be a number")
    .matches(/^\d+$/, 'The field should have numbers only')
    .required(),
  dateMonth: Yup.string()
    .label('Expiry month')
    .length(2)
    .typeError("Must be a number")
    .matches(/^\d+$/, 'The field should have numbers only')
    .required(),
  cvc: Yup.string()
    .label('CVC')
    .length(3)
    .typeError("Must be a number")
    .matches(/^\d+$/, 'The field should have numbers only')
    .required(),
})

export const CardPayment = () => {
  const { setCard, card } = useContext(CartContext)


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
    <div style={formStyling}>

      <Formik
        initialValues={{
          cardNr: '',
          name: '',
          dateYear: '',
          dateMonth: '',
          cvc: '',
        }}

        validationSchema={ValSchema}
        onSubmit={values => {
          setCard(values as Card)
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form>
              <Grid style={gridContainer}>
                <Grid style={grid} item xs={12} sm={6}>
                  Kortnummer:
                  <div style={inputForm}>
                    <Field name="cardNr" />
                    {errors.cardNr && touched.cardNr ? (
                      <div>{errors.cardNr}</div>
                    ) : null}
                  </div>
                </Grid>


                <Grid style={grid} item xs={12} sm={6}>
                  Namn:
                  <div style={inputForm}>
                    <Field name="name" />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                  Utgångsår:
                  <div style={inputForm}>
                    <Field name="dateYear" />
                    {errors.dateYear && touched.dateYear ? (
                      <div>{errors.dateYear}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                  Utgångsmånad:
                  <div style={inputForm}>
                    <Field name="dateMonth" />
                    {errors.dateMonth && touched.dateMonth ? (
                      <div>{errors.dateMonth}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                  Cvc:
                  <div style={inputForm}>
                    <Field name="cvc" />
                    {errors.cvc && touched.cvc ? (
                      <div>{errors.cvc}</div>
                    ) : null}
                  </div>
                </Grid>
              </Grid>
              <Grid style={submitStyling} item xs={12} sm={6}>

              {
                  card ? <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
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
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

const formStyling: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  color: 'darkgray',

}

const gridContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "20px",
  width: '300px',
  justifyContent: 'center',
}

const grid: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",

  columnGap: '15px'
}

const submitStyling: CSSProperties = {
  display: "flex",
  justifyContent: "center"
}

const inputForm: CSSProperties = {
  display: "flex",
  flexDirection: "column"
}


export default CardPayment;
