import { FC, CSSProperties } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Grid } from '@mui/material';



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
   phoneNumber: Yup.string()
   .min(9, 'Too Short!')
   .max(12, 'Too Long!')
   .required('Required'),

    }); 
 
    export const ValidationSchemaExample = () => (
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
                    Telefonnummer:
                    <Field name="phoneNumber" />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div>{errors.phoneNumber}</div>
                    ) : null}
                    </Grid>
                    <Grid style={submitStyling} item xs={12} sm={6}>
                    <button type="submit">Skicka</button>
                    </Grid>

                </Grid>
              </Form>
              </>
            )}
          </Formik>
        </div>
                  
      );

/* 
      interface User {
          firstname: string
          lastname: string
          email: string
          streetAdress: string

      } */

      /*
      const Basic = () => (
    <div>

      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', 
        streetAdress: '', postalCode: '', town: '', country: '', phoneNumber: ''}}
      
        validate={values => {
          let errors: any;
          if (!values.email) {
            
            errors.email = 'Email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
           errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */

/* 

 }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="firstName"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
           <input
             type="lastName"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           />
           {errors.lastName && touched.lastName && errors.lastName}
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="streetAdress"
             name="streetAdress"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.streetAdress}
           />
           {errors.streetAdress && touched.streetAdress && errors.streetAdress}
           <input
             type="postalCode"
             name="postalCode"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.postalCode}
           />
           {errors.postalCode && touched.postalCode && errors.postalCode}
           <input
             type="town"
             name="town"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.town}
           />
           {errors.town && touched.town && errors.town}
           <input
             type="country"
             name="country"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.country}
           />
           {errors.country && touched.country && errors.country}
           <input
             type="phoneNumber"
             name="phoneNumber"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phoneNumber}
           />
           {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 ); */
 

 const formStyling: CSSProperties = {
   display: "flex",
   justifyContent: "space-between",
   flexWrap: "wrap"
   
   
 }

 const gridContainer: CSSProperties = {
   display: "flex", 
   flexDirection: "column",
   alignContent: "center",
   flexWrap: "wrap",
   gap: "20px",
   marginLeft: "50px",
   marginBottom: "10px"
 }

const grid: CSSProperties = {
  display: "flex",
  justifyContent: "space-between"
}

const submitStyling: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end"
}


 export default ValidationSchemaExample;




