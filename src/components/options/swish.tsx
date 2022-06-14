import { FC, CSSProperties } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";


    const SignupSchema = Yup.object().shape({
   phoneNumber: Yup.number()
   .min(2, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required')
   .typeError("Must be a number"),

  }); 


     
    export const validationSwish = () => (
        <div style={formStyling}>
            
        <Formik
          initialValues={{
          
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
            
                    Tel.nummer:
                    <div style={inputForm}>
                      <Field name="phoneNumber" />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div>{errors.phoneNumber}</div>
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
                
    );
  
  
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
  