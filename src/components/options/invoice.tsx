import { FC, CSSProperties } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";


    const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
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
   .max(6, 'Too Long!')
   .required('Required'),
   town: Yup.string()
   .min(2, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required'),
   country: Yup.string()
   .min(2, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required'),
   phoneNumber: Yup.number()
   .min(9, 'Too Short!')
   .max(12, 'Too Long!')
   .required('Required'),

    }); 
 
    export const validationInvoice = () => (
      <div style={formStyling}>
          
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
          // same shape as initial values
          // DO SOMETHING HERE FOR SUBMIT :)))))))))))
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <>
          <Form>
            <Grid style={gridContainer}>
                <Grid style={grid} item xs={12} sm={6}>
                  Förnamn:
                  <Field name="firstName" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                    ) : null}
                  
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                Efternamn:
                  <Field name="lastName" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                  E-post:
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? <div>{errors.email}</div> 
                  : null}
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                Address:
                <Field name="streetAdress" />
                {errors.streetAdress && touched.streetAdress ? (
                  <div>{errors.streetAdress}</div>
                ) : null}
                </Grid>
              </Grid>
            </Form>

            <Form>
                <Grid style={gridContainer}>
                <Grid style={grid} item xs={12} sm={6}>
                Postnummer:
                <Field name="postalCode" />
                {errors.postalCode && touched.postalCode ? (
                  <div>{errors.postalCode}</div>
                ) : null}
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                Stad:
                <Field name="town" />
                {errors.town && touched.town ? (
                  <div>{errors.town}</div>
                ) : null}
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                Land:
                <Field name="country" />
                {errors.country && touched.country ? (
                  <div>{errors.country}</div>
                ) : null}
                </Grid>

                <Grid style={grid} item xs={12} sm={6}>
                Tel.nummer:
                <Field name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div></div>
                ) : null}
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
              
  );


const formStyling: CSSProperties = {
display: "flex",
justifyContent: "space-between",
flexWrap: "wrap"
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




 export default validationInvoice;




