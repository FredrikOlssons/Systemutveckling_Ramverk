import { FC, CSSProperties, useContext } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { CartContext } from '../context/cartProvider'
import { Invoice } from '../../data/payment';

    const SignupSchema = Yup.object().shape({
    
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
 

    }); 

    
    export const validationInvoice = () => {
      const { setInvoice } = useContext(CartContext)
      return (
      <div style={formStyling}>

        
          
      <Formik
        initialValues={{
          streetAdress: '', 
          postalCode: '', 
          town: '', 
          country: '', 
         

        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          setInvoice( values as Invoice)
          
          console.log(values);
        }}
      
        
      >
        {({ errors, touched }) => (
          <>
          <Form>
            <Grid style={gridContainer}>
     

                <Grid style={grid} item xs={12} sm={6}>
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
                <Grid style={gridContainer}>
                <Grid style={grid} item xs={12} sm={6}>
                  Postnummer:
                  <div style={inputForm}>
                    <Field name="postalCode" />
                    {errors.postalCode && touched.postalCode ? (
                      <div>{errors.postalCode}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                  Stad:
                    <div style={inputForm}>
                    <Field name="town" />
                    {errors.town && touched.town ? (
                      <div>{errors.town}</div>
                    ) : null}
                  </div>
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                Land:
                  <div style={inputForm}>
                    <Field name="country" />
                    {errors.country && touched.country ? (
                      <div>{errors.country}</div>
                    ) : null}
                  </div>
                </Grid>

           
                <Grid style={submitStyling} item xs={12} sm={6}>
                <Button type="submit" variant="contained" color="primary">Vidare</Button>
                
                </Grid>

            </Grid>
          </Form>
          </>
        )}
      </Formik>
    </div>
    
    )
              
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


 export default validationInvoice;




