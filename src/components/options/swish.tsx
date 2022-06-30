import { FC, CSSProperties, useContext } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Alert, Grid, Snackbar } from '@mui/material';
import { Button } from "@mui/material";
import { CartContext } from '../context/cartProvider';
import { Swish } from '../../data/payment';
import React from 'react';


    const SignupSchema = Yup.object().shape({
   phoneNumber: Yup.number()
   .min(2, 'Too Short!')
   .required('Required')
   .typeError("Must be a number")
   .test('len', 'Must be 10 numbers', phoneNumber => phoneNumber!.toString().length === 9),

  }); 


     
    export const validationSwish = () => {
      const { setSwish, swish } = useContext(CartContext)


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
          
            phoneNumber: '',
  
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            setSwish( values as Swish)
            
          }}
        >
          {({ errors, touched }) => (
            <>
            <Form>
              <Grid style={gridContainer}>
                  <Grid style={grid} item xs={12} sm={6}>
            
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
                      swish ? <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                          informationen har sparats!
                      </Alert>
                      </Snackbar> : <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                            Var vänlig och fyll i telefonnummer!
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
                
    );
                      }
  
  const formStyling: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: 'darkgray',
  }
  
  const gridContainer: CSSProperties = {
  display: "flex", 
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",
  marginLeft: "5%",
  marginBottom: "20px", 
  width: '300px'
  }
  
  const grid: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: '90%',
  }
  
  const submitStyling: CSSProperties = {
  display: "flex",
  justifyContent: "center"
  }
  
  const inputForm: CSSProperties = {
    display: "flex",
    flexDirection: "column"
  }

  
   export default validationSwish;
  